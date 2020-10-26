This is to expand the catalogue data provided by the client.
Catalogue data only include the week of products that were promoted over the last two year, across three supermarkets.

It is important to impute the rest non-promotional weeks as there are no other data sources.

However, the final number of products should be constrained to a limit that Excel can hold.

To reduce the amount of records to impute, I divided the process to 4 steps. (Due to the confidentiality, no data will be provided) 

1. Find the products that exist among all three supermarkets' catalogues and in the Drakes product list, which gives 
a products list containing the valid products APN and categories and names that we can inspect in the future 
dashboard. This step is done in the 'Join for Catalogues.xlsx'. I joined three catalogues and Drakes product list by APNs 
only and reduced all other columns. The sheet is called "Final Product List", with 1650 rows.

2. Use that matched APN/ID list to filter the catalogues of all three supermarkets so that the number of records can be
reduced tremendously. This step is done in the 'Join for Catalogues.xlsx'. The produced sheets are named 'Reduced Coles Catalogue',
'Reduced Drakes Catalogue' and 'Reduced WW Catalogue'.

3. Expand the reduced catalogues for each supermarket. This step is done by the "catalogue_expander.py".

4. Inner join the three expanded files on Date + State + APN/ID. Done in the 'Full Psuedo History Data.xlsx'. This gives the final data.

For the historical dashset, I am using absolute paths, which means when I migrate the workbook to other machines, the connections 
to data are lost. But it is fine for the historical dashboard, as it is a one-time thing.