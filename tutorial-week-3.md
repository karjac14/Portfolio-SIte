
####Box-Sizing

Box model is quiet confusing... Here is a possible solution for that.

One of the best thing I learned last week is `box-sizing: border-box`, it makes our lives easier when dealing wth the box model. By using this, or by declaring this for all the elements, we can simply assign the `height` and `width` to be the total of the `content` + `padding` + `border` not the default of just the `content`.  In this manner, it will be easy to just refer the `height` and `width` covers until the border`border`s. The only thing that has to be set is margin (if not auto) which ussually will be equal on how much space we want it to away from other element or the edge of the browser.

This can be applied at the top of the css file.

```
*, *::before, *::after {
  box-sizing: border-box;
}
```

The above code will set everything to have `border-box`.

Note that this trick was introduced in CSS3 and was widely used, and that if we need to work with prvious CSS version, this may not work.
