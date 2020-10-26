The part works on the matching solution provided by the third party

'similarity.py' extracts the Size features of both products and gives the SizeSimilarity.

'autochecker.py' selects the most accurate matching.

1. The matching was performed as one-ID-to-many-APNs relations.

2. We manually check the Coles Product ID one batch by one batch, 
as there are a lot of redundancy on the IDs, while the APNs are all unique.

3. The process is to find the most accurate one-to-one relation for each Cole ID.

4. If there is a delimma, we will check the price, the unit, and even brand.
However, the semantic similarity between the product names is always the primary attribute,
i.e. based on whether they are referring to the same type of product.

5. When checking the price, unless necessary, we avoid to assign 'Yes' to Drakes products with 0 transaction over the last two years,
as that kind of products are so unpopular that it is trivial to compare them.




