The part works on the expanded catalogue data, i.e. full pseudo data.

As it was pseudo for all three supermarkets. We tried out best to replace some values with real data, the Drakes data.

So the final produced data contain Drakes standard price and volume of sales.

The 'stdprice.py' finds the huge drop on the price based on its previous week, and mark the current week as Promotional week.

The 'shiftdate.py' shifts the real transactional data extracted from Drakes warehouse to dates on Monday.

Specific workflow:

1. Generate a new column 'AvgPrice' for all files labeled with 'metro'. In the "price and qty" folder.
This column contains the standard prices, which need to be merged to the files wiht quantities of all stores.

2. Left join "allqty" and "metro" files correspondingly on APN, Week and State, as 'allqty' files have more products. 
The joined files are stored in 'price qty join'. In the "price qty join" folder.

3. Write "shiftdate.py" to reformat the date of the joined files. 
The dates in those files mean the end date of a week, but they are all Tuesday. 
The dates in catalogue data, are always Monday. I believe it also indicate the end of a week. 
So I wrote the shiftdate.py to shift them back by one day, so that they can be joined with the full data.
See the csv files in 'price qty join'

4. Try to merge the csv file with the full data. elegantly. All of the followings are done by powerquery
4.1 But first, inner join the Date, APN and State from full pseudo data and the csv files, 
so that the number of records of csv files can be reduced.
4.2 Append the reduced csv files. 
4.3 Inner join between the full data, 158k rows, and the appended file, 110k+ rows. This filters out some products

5. Replace the values in Drakes.Unit Sell column with >0 'AvgPrice'. Avoid replacing those with >0 Unit Saving.

--------------------Solution to standard price----------------------
6. "stdprice.py" produces the "final standard.csv". Replace the table in current dashboard with the table in csv. 
