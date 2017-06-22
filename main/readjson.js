var fs = require("fs");

fs.readFile("basic.json", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  var x = JSON.parse(data)

  console.log(x[1]);

});