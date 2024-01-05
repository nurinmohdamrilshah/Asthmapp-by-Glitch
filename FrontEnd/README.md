
  # Asthmapp

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
     

4) run npm install 
5) npm install rollup 
6) npm install 
5) Use a bundler - Rollup.js to work around with the browser import issue. I'm using this cause its easier compared to webpack. 
6) Next, run the command on terminal: npx rollup -c within the same directory as rollup.config.js to bundle your SignUp.js with Firebase JS SDK. 
7) You can code as usual with imports in SignUp.js, the bundler will do the heavy lifting.