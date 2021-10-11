# 4. Listings and Pagination

In front, to check if the scroll is on the bottom, we use the window event "scroll", to which we will add a listener with a callback function that will be launched every time the user scrolls the page.
```
var counter = 0;
const onScroll = () => {
 if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
   //Call the API method
   service.post(params).then(resolve => {
       // Resolve operations
       counter++;
   })
  }
}

window.addEventListener('scroll', onScroll)
```
In the function "onScroll", we compare if the height of the window element minus the total height of the window is equal to the "y" position of the scroll and then we call to the service with the params and the counter.

We have also a "filter" variable that contains the field by which the user could want to filter. It is a optional parameter to the back.

The  variable will be incremented by 1 every time the back return a OK response.

In back, we receive the necessary parameters:
- counter: mandatory parameter which controls the initial value of the request.
- filter: optional parameter which indicates the field to sort by.

With this parameters, we build de query (it will be something like this): 
```
SELECT * FROM table ORDER BY filter LIMIT 20 OFFSET (counter*20);
```

This solution should not have problem with different screen sizes because it works based on screen size and window size.
