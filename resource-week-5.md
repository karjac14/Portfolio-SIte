


###Encapsulation with JS!

Resource Link: http://www.intertech.com/Blog/encapsulation-in-javascript/
_By: Jason Shapiro_

#####Why we encapsulate data?

Encapsulation includes the idea that the data of an object should not be directly exposed.  Instead, callers that want to achieve a given result are coaxed into proper usage by invoking methods (rather than accessing the data directly). _(Shapiro)_

#####How do we do it exactly?

There maybe more other ways of encapsulating data in Javascript, but the resource link shows an example of doing it by taking advantage of the local na global variables. Notice that by invoking a function that has a method inside, or directly placing the method at return block operator, will hide the source of data to the open world.
