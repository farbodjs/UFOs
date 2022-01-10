# UFOs

## Project Overview
The goal of this project is building a inter-active webpage that has the potential to accept users' inputs and can filter and show results accordingly to display details about UFO sightings.\

The users of this website are given the chance to filter the UFO sightings table based on multiple criteria such as the event date, city, state, country, and shape. 

## Resources
- Data Source: [UFO data](https://github.com/farbodjs/UFOs/blob/main/data.js)
- Software: HTML/CSS, JavaScript, Visual Studio Code 1.49.1, BootStrap 4.0.0

## Results
### Links to UFOs sightings webpage

The deployed webpage is accessible at https://farbodjs.github.io./

### Instruction for users to tailor their search
After you open the webpage via the link provided above, you should see the screen shot below:
![image](https://user-images.githubusercontent.com/86033316/148709191-647de21e-aa47-49a9-8c5b-7ae894ca9128.png)

Please scroll down to reach to the middle of the page where filter search appears on the left of the webpage (see highlights) :

![image](https://user-images.githubusercontent.com/86033316/148709306-fa45e525-43d0-485e-9c25-8a7191c89d23.png)
AS shown above, there are 5 filters you can choose to narrow down your search by Date, City, State, Country, and shape of the UFO.

For illustration purposes, we filtered through our data base for results of the City of Fresno. Please see the snippet below for the results
![image](https://user-images.githubusercontent.com/86033316/148709501-b90dcc66-3f98-4400-86d0-d1eafbfcfdf6.png)

## Summary
- A disadvantage of this design is the inconvenience for the users to understand what keys to use in the search fields. For instance, there may be only limited cities with UFO sightings and the user would have to try different cities potentially with no results and then they have to refer to all results to find the city desired for the analysis.
- A way to address this problem is to introduce a drop-down list including all filter values in place of the input fields.
Each list would need to update after a parameter is selected in any filter.
