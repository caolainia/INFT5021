import pandas as pd
from datetime import datetime, timedelta

df = pd.read_excel('Final Clean Data Plain.xlsx',sheet_name='Sheet1',header=0,converters={'Date':str,'APN':str})

total = 0
for apn in df['APN'].unique():
	apn_df = df.loc[df['APN'] == apn]
	for state in apn_df['State'].unique():
		state_apn = apn_df.loc[apn_df['State'] == state]
		state_apn_sort = state_apn.sort_values('Date', ascending=True)
		pre_list = []
		pre_price = 0.0
		pre_saving = 0.0
		count = 0
		for index, row in state_apn_sort.iterrows():
			total += 1
			if count == 0:
				# skip the first iteration
				pre_price = row['Drakes.Unit Sell']
				pre_saving = row['Drakes.Unit Savings']
				if pre_saving == 0:
					pre_list.append([index, pre_price])
			else:
				now_price = row['Drakes.Unit Sell']
				now_saving = row['Drakes.Unit Savings']
				# avoid those have savings greater than 0
				if now_saving == 0:
					# tiny drop or equal
					if pre_price >= now_price and 0.96*pre_price < now_price:
						if pre_saving == 0:
							# in case the iteration starting from 0 saving but actually in promotion
							pre_list.append([index, now_price])
						else:
							now_saving = round(pre_saving + pre_price - now_price, 2)
						df.at[index,'Drakes.Unit Savings'] = now_saving
						print('-------------------tiny drop or equal---------------------')
						print("Replace old saving 0 with %.2f, for product %s|%s, on %s, at %d." % (now_saving, apn, state, row['Date'], total))

					# huge drop
					elif now_price <= 0.96*pre_price:
						now_saving = pre_price - now_price + pre_saving
						df.at[index,'Drakes.Unit Savings'] = now_saving
						# clear pre_list as we encountered a drop instead of 
						if len(pre_list) > 0:
							pre_list = []
						print('-------------------huge drop---------------------')
						print("Replace old saving 0 with %.2f, for product %s|%s, on %s, at %d." % (now_saving, apn, state, row['Date'], total))
					# rise
					else:
						# check if pre_list is empty
						if len(pre_list) > 0:
							print('----------------------rise-----------------------')
							print("Impute the initial few records, for product %s|%s, on %s, at %d." % (apn, state, row['Date'], total))
							for i in pre_list:
								reupdate_saving = round(now_price - i[1], 2)
								print("Impute with %.2f, for product %s|%s." % (reupdate_saving, apn, state))
								df.at[i[0],'Drakes.Unit Savings'] = reupdate_saving
							pre_list = []
				pre_price = now_price
				pre_saving = now_saving
			count += 1

df.to_csv('./final standard.csv', index=False)