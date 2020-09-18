# Assignment 4

## Goal

[x] Make 4 routes: "/" , "/about-us" , "/contact" and "/protected"
[x] Each route should render a string with the name of the page, i.e: "/about-us" -> About Us.
[x] Make one middleware for all the routes, that middleware should console.log the message "I'm a middleware" on every request to any route.
[x] Make a middleware that won't allow me to go to "/protected", if I try to go to "/protected" I should be redirected back to "/"
