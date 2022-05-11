console.log("%c{ioGame name} Patcher: remote.js", "font-size:20px;color:#540052;font-weight:900;font-family:sans-serif;");



/* ----------- BEGIN REQUIRED FUNCTIONS  ----------- */

const prefix5 = "[{ioGame name} Patcher]"; /* Patcher Prefix */
const filename5 = "remote.js"; /* Filename */
const filecat5 = "remote file"; /* File Category */

function log (message) {
    return console.log(prefix5 + " *at " + filecat5 + " " + filename5 + "* " + message);
}

log("{ioGame name} Patcher is running: " + filename5);
log(filename + " is not a modified file from {ioGame name}. It is loaded from Patcher, by using loader.js");

/* ----------- END REQUIRED FUNCTIONS  ----------- */



/* remote.js is a file for QUICKLY loading updatable code into Craftnite, no pull on the patcher instance required.
    this is very useful for notifying when hacks are down, pushing hotfixes, etc. */



/* ----------- BEGIN MAIN CODE  ----------- */



/* Hi, if you're here, you should remove the code below.  */

eval(await (await fetch("https://unpkg.com/sweetalert2")).text());
    if (swal) {
        swal.fire({
            title: "Hacks are not set up.",
            html: `If you are the developer of the hacks, please see the documentation on how to set up the hacks. If you're just using the hacks, please contact the developer of the hacks.`,
            icon: "warning"
        })
    } else {
        alert("Hacks are not set up. If you are the developer of the hacks, please see the documentation on how to set up the hacks. If you're just using the hacks, please contact the developer of the hacks.");
    }



/* ----------- END MAIN CODE  ----------- */
