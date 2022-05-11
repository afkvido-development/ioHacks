"use strict";
const readline = require("readline");
const express = require("express");
const app = express();
const fs = require("fs");
const port = 1003;
const logPrefix = "[{ioGame name} Patcher] ";
function log(message) {
    return console.log(logPrefix + message);
}
function sendJS(file) {
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
function sendTXT(file) {
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
sendJS("example");
sendTXT("LICENSE");
log(`Running {ioGame name} Patcher at http://localhost:${port}`);
const dashboard = (`
\n
The {ioGame name} file modifier runs along, listening on port ::${port}
One Dashboard:

    [X] - Shut down Patcher
    [R] - Reload files
`);
app.listen(port, () => {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    log(dashboard);
});
process.stdin.on("keypress", (str, key) => {
    const { name, ctrl } = key;
    if (name === "x" || (name === "c" && ctrl)) {
        log("Exiting One...");
        process.exit();
    }
    if (name === "r") {
        log("Reloading files...");
    }
});
//# sourceMappingURL=index.js.map