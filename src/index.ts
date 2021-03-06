// Import required modules
const readline = require("readline");
const express = require("express");
const app = express();
const fs = require("fs");





/* Constants */
const port : number = 1003;


/* Log prefix for console.log() */
const logPrefix : string = "[{ioGame name} Patcher] ";


/* Automatically console.log with prefix */
function log (message : string) : void {
    return console.log(logPrefix + message);
}


/* File sender */
function sendJS (file : String) : void {

/* This code in the eval is JavaScript, not TypeScript btw. */
return eval(`

      var ${file} = "";

      fs.readFile("assets/${file}.js", "utf8", (error, patched${file}) => {
      ${file} = new String(patched${file});
      })

      app.use(express.static("dist"));
      app.get("/${file}.js", (req, res) => {
          res.type("js").send(${file}.toString());
      });
      `);
}


/* TXT File sender */
function sendTXT (file : String) : void {

/* This code in the eval is JavaScript, not TypeScript btw. */
return eval(`

      var ${file} = "";

      fs.readFile("assets/${file}.txt", "utf8", (error, patched${file}) => {
      ${file} = new String(patched${file});
      })

      app.use(express.static("dist"));
      app.get("/${file}.txt", (req, res) => {
          res.type("txt").send(${file}.toString());
      });
      `);
}




/* -- BEGIN GAME FILES -- */

sendJS("example"); // example.js

/* -- END GAME FILES -- */





/* -- BEGIN TEXT FILES -- */

sendTXT("LICENSE"); // LICENSE.txt

/* -- END TEXT FILES -- */





/* Notify us that One is now running */
log(`Running {ioGame name} Patcher at http://localhost:${port}`);





/* --- BEGIN DASHBOARD --- */

const dashboard = (`
\n
The {ioGame name} file modifier runs along, listening on port ::${port}
One Dashboard:

    [X] - Shut down Patcher
    [R] - Reload files
`);


/* Add keypress listener and send the dashboard */
app.listen(port, () => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    log(dashboard);
});




/* On Keypress */
// @ts-expect-error
process.stdin.on("keypress", (str, key) => {
    /* Key name */
    const { name, ctrl } = key;

    /* If it's [x] or [ctrl + c], then exit One. */
    if (name === "x" || (name === "c" && ctrl)) {
        log("Exiting One...");
        process.exit();
    }

    // If it's [r], then reload the files.
        if (name === "r") {
            log("Reloading files...");
            /* Coming Soon */
        }

});

/* --- END DASHBOARD --- */