
# Iflix Coding Challenge

[Original Gist](https://gist.github.com/pomke/ebf45e82e9d08c36c9cd926f21ae0e73)

[Published on Github Pages here](https://shahrene.github.io/iflix-coding-challenge/)

**The Task**

Create a web component that submits a 1-5 star rating for iflix titles. Display average rating on screen once the user has rated.

*What type of tech did you use and why?*

I used HTML, CSS & JavaScript because I felt most confident in being able to produce a MVP.

*What approach did you take and why?*

I thought about what tech I would like to use and researched creating a modal dialog popup and the star rating.

I decided on a simple modal pop up with radio buttons which I styled with unicode stars. The stars have different styling for each state ie, checked or not checked, hover and unchecked, hover and checked etc.

Next the functions to open the modal on a button click, to close the modal on the 'X' button click and also a function which will close the modal once the user has rated were written. There is a bonus command which allows the user to click away (on the window) and close modal without entering a rating.

I wrote the function to check for how many stars have been checked. These values are pushed to an array. The last pieces of code takes this information, averages the numbers that get pushed into the array and prints on screen.

I tested for browser compatibility and found functionality is good and the only issue being the stars are slightly out of alignment in Firefox. Endeavoured to keep my code tidy with appropriate commenting as I went along.

*What would you add to have this "production ready"?*

A backend to store the users and ratings data.

Have the 'Rate This Video' button appear only once the video has finished playing.

*Any other pieces/decisions or reasoning you'd like to call out.*

I considered having the modal pop up after a delay, however I personally find automatic pop up boxes intrusive, so I gave it a button and users can choose to rate the video.

I would like build to it again using a component based library such as React because it would better support scalability and maintainability.
