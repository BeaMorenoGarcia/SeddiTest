# 4. Listings and Pagination

In front, to check if the scroll is on the bottom, we use the window event "scroll", to which we will add a listener with a callback function that will be launched every time the user scrolls the page.
```
var counter = 0;
const onScroll = () => {
 if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
   //call the API method
   service.post(params)
   counter++;
  }
}

window.addEventListener('scroll', onScroll)
```
In the function onScroll, we compare if the height of the window element minus the total height of the window is equal to the "y" position of the scroll and then we call to the service with the params and the counter.

In back, we receive the necessary parameters:
- counter: mandatory parameter which controls the initial value of the request.
- filter: optional parameter which indicates the field to sort by.
