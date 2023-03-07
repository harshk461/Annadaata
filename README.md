# Pratidhi

# Problem Statement
**Crop Guidance and Farmers Friend - (BioTech)**

Earlier, crop cultivation was undertaken on the basis of farmer’s hands-on expertise.  However,  climate  change  has begun to affect crop yields badly. Consequently, farmers are unable to choose  the right  crop/s  based  on  soil  and  environmental  factors,  and  the process of manually predicting the choice of the right crop/s of land has, more often than not, resulted in failure.  Accurate crop prediction  results  in  increased  crop  production.  This  is  where machine learning playing a crucial role in the area of crop prediction. Crop prediction depends on the soil, geographic  and climatic attributes.

**Solution of Problem**

Predicts the best crop for cultivation by analyzing the given parameters of soil for efficient production and high yield.

**Description  of the  crop dataset**

Attributes						Soil Characterstics

1.N (Nitrogen)	Nitrogen is  a key  element in  plant growth. <br/>

2.P (Phosphorus) Phosphorus helps  transfer energy from sunlight  to plants, stimulates  early root and  plant growth, and  hastens maturity. <br/>

3.K(Potassium) Potassium increases vigour and disease resistance of plants, helps form and move starches, 
										sugars and  oils in  plants, and  can improve fruit  quality. <br/>

4.Temperature	Temperature is  important for  growth and  development. <br/>

5.Rainfall	Rainfall has the great impact on crop growth.  Excessive and insuﬃcient rainfall aﬀects the yield. <br/>

6.pH (potential of.Hydrogen)  pH is  the main  factor for  farming <br/>

7.Humidity 	 conditions are too humid, it may promote the growth of mold and bacteria that cause plants to die and crops to fail. 
Humid conditions also invite the presence of pests, such as fungus gnats, whose larva feed on plant roots and thrive in moist soil. <br/>
<br/>
                      

**Crop Prediction Procedure**

The basic crop prediction procedure used by our proposed ML model is given below. Soil parameters and environmental 
conditions are given as input and the predicted crop as output.
Step 1: Crop dataset is given as input, and the set of data imported. <br/>
Step 2:  The attributes used in the set of data  are transformed into  a particular range, 
bringing  the  set of data  into  a consistent  state,  thus avoiding anomalies.  Any  missing 
values  are  removed  and  normalization  used  to  standardize  the  data.  Redundancy  is 
minimized  once,  the  dataset  is structured  and  also  it  helps to  make  the eﬃcient  data 
for the prediction processing. <br/>
Step 3: The feature selection technique is applied on the preprocessed data to select the 
most important attributes from the dataset  to create a reduced dataset. <br/>
Step  4:  The reduced  dataset  is split  in  order to  be  used in  the  training and  testing 
phases. <br/>
Step  5:  First,  75%  of  the  samples  from  the  reduced  dataset  are  taken  as  training 
samples. <br/>
Step 6: The classiﬁcation algorithm is applied to the training samples. <br/>
Step 7: The classiﬁcation algorithm is trained with the entire training dataset to predict 
a suitable crop. <br/>
Step 8: Of the samples, 25% are taken from the reduced dataset as testing samples. <br/>
Step  9: The  trained  classiﬁer  is  applied  to  the testing  samples  to  predict  the  most 
suitable crop for cultivation in a particular piece of land. <br/>
Step 10: The target label for  new  instances  is  found  by  the trained classiﬁer so as to 
identify a suitable crop. <br/>
Step 11: Finally, a suitable crop  for cultivation is recommended by the results. <br/>
