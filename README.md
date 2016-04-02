# HouseRank

### Background
HouseRank is an app built by 4 UC Berkeley students designed to help students find housing options customized to their preferences on CraigsList.

### Data Collection
The app works by scraping housing options off of Craigslist near a location specified by the user. This is done in data/craigslist_scraper.ipynb. The user specifies the zip code and the search radius they would like. The program then scrapes Craigslist to obtain all the housing options along with their price, square footage, city, latitude and longitude, open house date, images, and the overall description. 

### Feature Extraction
In order to gather more features, we also extract additional features from the description using regex operations to get features such as the type of flooring, number of bedrooms, parking, and any other features. We also use lat/long here to determine direction and distance from UC Berkeley for our test case. This is done in the front half of FeatureExtractor/Hackathon.ipynb.

### Classification
After extracting all the features of the samples and creating some training samples, the classification of the test set is done in the remainder of FeatureExtractor/Hackathon.ipynb. We chose to use a Support Vector Machine (SVM) with a Radial Basis Function (RBF) Kernel. Thus the remaining data that was obtained via the Craigslist Scraper is classified by the RBF SVM and returned to the user. Thus this app helps users expedite their house finding process by allowing users to save time by filtering out housing options they would not like. 




