import pandas as pd
import re
import jellyfish

df = pd.read_excel('price similarity.xlsx',sheet_name='Sheet6',header=0,converters={'Drakes APN':str})

for index, row in df.iterrows():
	ts = row['Coles Similarity Score']

	# get Drakes unit
	name = row['Drakes Product Name']
	res = re.findall(r'(\d+\.?\d*?[a-zA-Z]*)\s|(\d+\.?\d*?[a-zA-Z]*)$', name)
	found = '1 each'
	if len(res) > 0:
		for e in res[len(res)-1]:
			if len(e) > 0:
				found = e.strip()
				break
	print("%d: %s unit: %s" % (index, name, found))

	# get Colse Unit
	cunit = row['PackSize'].lower()
	cfound = cunit
	if 'approx' in cunit:
		try:
			cfound = re.search(r'(\d+\.?\d*?[a-zA-Z]*)\s|(\d+\.?\d*?[a-zA-Z]*)$', cunit).group(1)
		except AttributeError:
			cfound = '1 each'
	else:
		if 'pack' in cunit:
			try:
				cfound = re.search(r'(\d+\.?\d*?[a-zA-Z]*)\s', cunit).group(1).strip()
			except AttributeError:
				cfound = '1 each'

	# compare 
	ss = jellyfish.jaro_distance(str(cfound).lower(), str(found).lower()) * 100
	df.at[index,'Coles Price'] = row['Price'] + row['PriceSaving']
	df.at[index,'Drakes Unit'] = str(found)
	df.at[index,'SizeSimilarity'] = ss
	df.at[index,'Confirm'] = 'TBD'

df.to_csv('./match result.csv', index=False)