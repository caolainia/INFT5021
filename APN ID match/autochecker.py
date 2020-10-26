import pandas as pd
import numpy as np
import jellyfish
import re
df = pd.read_excel('match result real 50 33 inclusive.xlsx',sheet_name='match result real',header=0,converters={'Drakes APN':str})

dft = df.loc[df['Confirm'] == 'TBD']

for cid in dft['Coles Product ID'].unique():
	cid_df = dft.loc[dft['Coles Product ID'] == cid]
	maxid = cid_df['Coles Similarity Score'].idxmax()
	highestscore = cid_df.loc[maxid, 'Coles Similarity Score']
	# start with 1 2 3 8 9 and not confirmed before
	if cid.startswith('2') or cid.startswith('3') or cid.startswith('8') or cid.startswith('9'):
		# Update Overall Score
		for index,row in cid_df.iterrows():
			# get size similarity
			ss = jellyfish.jaro_distance(str(row['PackSize']).lower(), str(row['Drakes Unit']).lower()) * 100
			# modify the overall score
			df.loc[index,'SizeSimilarity'] = ss
			df.loc[index,'OverallSimilarity'] = row['Coles Similarity Score'] + 0.5*ss + 0.1*row['PriceSimilarity']
		# n-row batch
		if cid_df.shape[0] > 1:
			# place no for all then update yes
			for index2,row in cid_df.iterrows():
				df.loc[index2,'Confirm'] = 'No'
			# highest Coles Score > 40, eligible to be 'Yes'; otherwise it is no
			if highestscore > 40:
				yesindex = cid_df['OverallSimilarity'].idxmax()
				# OverallScore must > 60 and the corresponding ColesScore must > 40
				if df.loc[yesindex, 'OverallSimilarity'] > 60 and df.loc[yesindex, 'Coles Similarity Score'] > 40:
					df.loc[yesindex, 'Confirm'] = 'Yes'
					print("successfully find a yes match in index: %d" %(yesindex))

		# 1-row batch
		else:
			for index3,row3 in cid_df.iterrows():
				# decompose the size to number and unit
				cnum = re.findall(r'\d+', str(row3['PackSize']))
				dnum = re.findall(r'\d+', str(row3['Drakes Unit']))
				cunit = ''.join([i for i in str(row3['PackSize']) if not i.isdigit()])
				dunit = ''.join([i for i in str(row3['Drakes Unit']) if not i.isdigit()])
				if cnum[0] == dnum[0] and cnum[0] != 1:
					df.loc[index3,'Confirm'] = 'Yes'
					print("successfully find a yes match in index: %d" %(index3))
				elif cunit.strip() != dunit.strip():
					df.loc[index3,'Confirm'] = 'No'
df.to_csv("match result 12389.csv", index=False,encoding='utf-8')

		
