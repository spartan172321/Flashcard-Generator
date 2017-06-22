var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
	{
		type: 'list',
		name: 'type',
		message: 'Pick the type of card you want to answer',
		choices: ['Basic Card', 'Cloze Card']
	}
  	]).then(function(answer){
  		if(answer.type === 'Basic Card'){
  			readBasic();
  		}
  		else if(answer.type == 'Cloze Card'){
  			readCloze();
  		}
});

function readBasic(){
	fs.readFile("basic.json", "utf8", function(error, data) {
	  if (error) {
	    return console.log(error);
	  }
	  // console.log(JSON.parse(data))
	  var x = JSON.parse(data)
	  console.log(x[0])
	  // var basicArr = data.split(",");

	  // console.log(basicArr[0])
	  // console.log(basicArr[1])
	  // console.log(basicArr.length)
	  // for(var i = 0; i<basicArr.length; i++){

	  // }
	});
}

// function askBasic(){

// }