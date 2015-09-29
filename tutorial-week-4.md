

From the last week's assignemnt, I learned how to link the three parts of the MVC. I will recap how the three were linked, invoked and return values in the Chessboard assignment. There are many ways of doing these linkages between the M, V and C, but I will show below how I demonstrated these:

####View to Controller

 - Properly identify the elements to be used in the html and assign classes and ids.
 - Properly link the .js files (main.js first, and then controller.js) and css file(s). The html files serves as a hub for all the needed files to be linked.
 - Using Jquery or JS,  controller listens to any user actions such as "click". 
 
      `jQuery('#forward').on('click', function(event){});`
 
####Controller to Model
 
 - When the controller detects the user interaction, it invokes a specific method in the main.js
 
      `game.next();`
 
####Model to Controller

 - When the methods in the main.js are invoked, it executes the statements and operations inside of the block operator.
 
  ```if (ctr < moves.length) {
      ctr += 1;
      console.log (ctr);
      game.applyMove(true,false); ```
      
 - Remember that controller.js depends on the main.js, and not the other way around. In main.js we can't invoked anything in the controller.js. The model ussually holds database and performs operations internally.
 
 - To get the return value of the methods in main.js, what I was assigning the invoked method return value to a variable.
 
       `game.next();`  to --->   `var arr = game.next();`
       
       In this way, the return value of `game.next();` will be assigned to identifier `arr`. Doing so, we were able to close the link between model and controller.  
 
 
####Conroller to View
 
 - From the data that we got from the model, we use Jquery again to change, add, or remove classes of the our DOM elements. From there we can alter the behaviour of the html elements. 
 
     `$('#F6').addClass('bknight');
      $('#G8').removeClass('bknight');`
 
- Surely, there are more ways of linking the MVC architecture and hopefully we can learn them further through more practice.
