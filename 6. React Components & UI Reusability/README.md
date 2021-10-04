# 2. Reactive Components

In this case, being two sibling components that share information, it is necessary to have a parent component that controls the flow.

![Sibbling Components](/2.%20Reactive%20Components/sibbling-components.gif)

The parent component is the one that controls where the information goes, depending on which component sends it. If the Child One Component changes the information of the output variable, it fires an event that is listened to by the Parent Component, , which changes the value of the variable to which the Child Two Component's observable subscribes. 

The flow from the other component would be the same.