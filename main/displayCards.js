var inquirer = require("inquirer");
var fs = require("fs");
var right = 0;
var wrong = 0;
var i = 0;
var bcards;

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

function loopBasic(){
  	if(i < bcards.length){
  		
  		inquirer.prompt([
      {
	      name: "back", 
	      message: bcards[i].front
      }
  		]).then(function(guess){
	  		if(guess.back == bcards[i].back){
	  			right++;
	  			console.log('You are right!\n');
	  		}
	  		else{
	  			wrong++;
	  			console.log('Sorry! The right answer is '+bcards[i].back+'\n')
	  		}
	  		i++;
	  		loopBasic();
  		});
  		
  	}
  	else if(i === bcards.length) {
  		console.log("Right: "+ right);
			console.log("Wrong: "+ wrong);
  	}
}


function readBasic(){
	fs.readFile("basic.json", "utf8", function(error, data) {
	  if (error) {
	    return console.log(error);
	  }
	  //parse the data from the basic.json file and store it in a variable
	  bcards = JSON.parse(data);
	  console.log(bcards[0].front)
	  console.log(bcards[0].back)

	  // loop through the questions
	  loopBasic();
	});
}

