# plotly-challenge
Homework 15: Plot.ly

<h2>Challenge Summary</h2>

In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

<h2>Description</h2>

Using the provided starter code in index.html, I updated an apps.js file to dynamically update the website to present the data presented in this study in a visually appealing and easy to understand way. I started by indexing into the json file itself using the d3 JavaScript library to see and understand the flow and look of the data.

After better understanding the data, I created a function to populate the dropdown menu using the json data. This way I would be able to easily ensure that the dropdown menu always matched my data file. I then created an event listener to catch the action of the user selecting a specific sample set from the dropdown menu. Using that listener, I could update the webpage with the relevant information for that sample set.

Once all user-generated information was captured, I used the Plot.ly Javascript library to create informational charts and tables relating to the sample set of interest. Using the API at https://plotly.com/javascript/, I created a unique bubble chart, bar chart, gauge, and metadata table that pulled from samples.json. I included a conditional statement in my code to convert the dropdown selection to its index in the dataset. Because the dataset was complete and uniform, I was able to use an index number in each sub-array instead of searching for the same "id" primary key in every data pull. Had the data not been complete and uniform, I would have had to use a separate language (mongoDB or pandas) to merge and reduce the json data.

<h2>Results</h2>

In this challenge, I created JavaScript code that dynamically updates a single-page website to update the page based on a user-generated action from clicking on a specific selection from dropdown menu. Once selected, the page updates with multiple sections that presentate a specific dataset of bacteria gathered from the Dunn Lab. The JavaScript allows the user to update the page to view different samples based on that dropdown.

The webpage is hosted on GitHub at https://chtho3.github.io/plotly-challenge/ .
