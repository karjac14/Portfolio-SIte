
SASSSSS!

- I enjoyed making the chessboard using SASS, Some times it gets complicated though. I realized that when we start SASS systematically according to the HTML stucture, it will be easier to play with the SASS.

- Installing SASS
	SASS can be installed fro the terminal.
	Key-in: `npm install node-sass` at the directory or project folder.

- Coding with SASS
	Coding in node-sass is simple and easier than the convetional css.  The main difference between the two would probably the order they are written. SASS follows the order or heirarchy according to the DOM or the html. One example is that you can place a selector `p` inside of a parent selector such as `div`. While in CSS, the selectors are coded sperarately and independently from each other. 

- Compiling SASS
	SASS files are complied in terminal in this format: `node-sass "SCSS-file" "CSS-file"`.  Where in SCSS file is the input file, and CSS-file is the outcome CSS file. A practical example will be:
	
	`node-sass src/scss/custom.scss src/css/custom.css`
	
	There are other options that can be added on the syntax such as output-style where in you can choose the output file to be coded in "compressed", "nested" among other
	 

- APPs for SASS

	For the visual people that likes working to see actual application, the developer of sass had created stand-alone application such as "Koala Sass" that can easily compile SASS files in few clicks.
