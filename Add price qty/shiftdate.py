import pandas as pd
import datetime as dt

def shift_date(df):
	df['Week'] = df['Week'].str.replace(r'.*w/e\s', '')
	for index, row in df.iterrows():
		tue_date = dt.datetime.strptime(str(row['Week']), '%d %b %Y')
		mon_date = tue_date - dt.timedelta(days=1)
		df.at[index,'Week'] = mon_date.strftime("%Y%m%d")
		if index%1000 == 0:
			print("%i: %s with apn %s" %(index, df.at[index,'Week'], row['APN']))
	print("one file is done")

df1 = pd.read_excel('20180605.xlsx',sheet_name='Sheet1',header=0,converters={'Week':str,'APN':str})
shift_date(df1)
df1.to_csv('./20180605.csv', index=False)

df2 = pd.read_excel('20180710.xlsx',sheet_name='Sheet1',header=0,converters={'Week':str,'APN':str})
shift_date(df2)
df2.to_csv('./20180710.csv', index=False)

df3 = pd.read_excel('20190101.xlsx',sheet_name='Sheet1',header=0,converters={'Week':str,'APN':str})
shift_date(df3)
df3.to_csv('./20190101.csv', index=False)

df4 = pd.read_excel('20190709.xlsx',sheet_name='Sheet1',header=0,converters={'Week':str,'APN':str})
shift_date(df4)
df4.to_csv('./20190709.csv', index=False)

df5 = pd.read_excel('20200107.xlsx',sheet_name='Sheet1',header=0,converters={'Week':str,'APN':str})
shift_date(df5)
df5.to_csv('./20200107.csv', index=False)

df6 = pd.read_excel('20200707.xlsx',sheet_name='Sheet1',header=0,converters={'Week':str,'APN':str})
shift_date(df6)
df6.to_csv('./20200707.csv', index=False)


