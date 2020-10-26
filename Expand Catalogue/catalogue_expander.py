import pandas as pd
from datetime import datetime, timedelta

reduced_catalogues = pd.ExcelFile("./Join for Catalogues.xlsx")

ww = reduced_catalogues.parse("Reduced WW Catalogue")
co = reduced_catalogues.parse("Reduced Coles Catalogue")
dr = reduced_catalogues.parse("Reduced Drakes Catalogue")

df_ww = pd.DataFrame().reindex_like(ww).iloc[0:0]
df_co = pd.DataFrame().reindex_like(co).iloc[0:0]
df_dr = pd.DataFrame().reindex_like(dr).iloc[0:0]

def expand_dataset_to_csv(df, to_store):
	start_date = datetime(2018, 6, 4)
	end_date = datetime(2020, 8, 24)
	total = len(df.groupby(['State', 'APN']).size().reset_index(name='Freq').index)
	count = 0
	for apn in df['APN'].unique():
		apn_df = df.loc[df['APN'] == apn]
		for state in apn_df['State'].unique():
			count += 1
			# extract the sorted unique product at unique state
			state_apn = apn_df.loc[apn_df['State'] == state]
			state_apn_sort = state_apn.sort_values('Date', ascending=True)
			print('--------------------------------------------------------')
			print("Expanding for %d/%d product, %s|%s." % (count, total, str(apn), state))
			previous_date = start_date
			# expanding 
			for index, row in state_apn_sort.iterrows():
				current_date = datetime.strptime(str(row['Date']), '%Y%m%d')
				temp = row.copy(deep=True)
				standard_price = row["Unit Sell"] + row["Unit Savings"]
				temp["Unit Sell"] = standard_price
				temp["Unit Savings"] = 0
				temp["Savings %"] = 1
				while previous_date < current_date:
					temp['Date'] = previous_date.strftime('%Y%m%d')
					#print(temp)
					to_store.loc[len(to_store)] = temp
					previous_date = previous_date + timedelta(days=-previous_date.weekday(), weeks=1)
				print('Juncture: %.2f + %.2f' % (row['Unit Sell'], row['Unit Savings']))
				# append the promotional row
				to_store.loc[len(to_store)] = row
				# move the cursor to next Monday
				previous_date = current_date + timedelta(days=-current_date.weekday(), weeks=1)
			# in the end, impute the data till end date
			while previous_date <= end_date:
				temp['Date'] = previous_date.strftime('%Y%m%d')
				# print(temp)
				to_store.loc[len(to_store)] = temp
				previous_date = previous_date + timedelta(days=-previous_date.weekday(), weeks=1)
	return to_store


ww_to_store = expand_dataset_to_csv(ww, df_ww)
print("Expanding is done. Writing to csv")
ww_to_store.to_csv('./Catalogue Woolworths Expanded.csv', index=False)

co_to_store = expand_dataset_to_csv(co, df_co)
print("Expanding is done. Writing to csv")
co_to_store.to_csv('./Catalogue Coles Expanded.csv', index=False)

dr_to_store = expand_dataset_to_csv(dr, df_dr)
dr_to_store.to_csv('./Catalogue Drakes Expanded.csv', index=False)