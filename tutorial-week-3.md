
Box-Sizing

One of the best thing I learned last week is `box-sizing: border-box`, it makes our lives easier when dealing wth the box model. By using this, or by declaring this for all the elements, we can simply assign the `height` and `width` to be the total of the `content` + `padding` + `border` not the default of just the `content`.  In this manner, it will be easy to just refer the `height` and `width` covers unlit `border`s. The only thing that have to be set is margin which ussually will be equal on how much space we want it to away from other element or the edge of the browser.

```
*, *::before, *::after {
  box-sizing: border-box;
}
```

The above code will set everything to have `border-box`.

Note that this trick was introduced in CSS3,and that if we need to work with prvious CSS version, this may not work.
