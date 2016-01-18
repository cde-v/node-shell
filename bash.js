var commands = require("./commands");
// Log the global process variable created by node
//console.log(process);

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", function(data) {
  var input = data.toString().trim(); // remove the newline
  var inputArr = input.split(" ");
  var cmd = inputArr[0];
  var arg = inputArr.slice(1).join(" ");

  commands[cmd](arg);
//process.stdout.write("You typed: " + cmd);
});

