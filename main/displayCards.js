var inquirer = require("inquirer");
var fs = require("fs");
var right = 0;
var wrong = 0;
var i = 0;
var cards;

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
  	if(i < cards.length){
  		
  		inquirer.prompt([
      {
	      name: "back", 
	      message: cards[i].front
      }
  		]).then(function(guess){
	  		if(guess.back == cards[i].back){
	  			right++;
	  			console.log('You are right!\n');
	  		}
	  		else{
	  			wrong++;
	  			console.log('Sorry! The right answer is '+cards[i].back+'\n')
	  		}
	  		i++;
	  		loopBasic();
  		});
  		
  	}
  	else if(i === cards.length) {
  		console.log("Right: "+ right);
			console.log("Wrong: "+ wrong);
  	}
}

function loopCloze(){
  	if(i < cards.length){
  		
  		inquirer.prompt([
      {
	      name: "cloze", 
	      message: cards[i].partial
      }
  		]).then(function(guess){
	  		if(guess.cloze == cards[i].cloze){
	  			right++;
	  			console.log('You are right!\n');
	  		}
	  		else{
	  			wrong++;
	  			console.log('Sorry! The right answer is '+cards[i].cloze+'\n')
	  		}
	  		i++;
	  		loopCloze();
  		});
  		
  	}
  	else if(i === cards.length) {
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
	  cards = JSON.parse(data);
	  // console.log(cards[0].front)
	  // console.log(cards[0].back)

	  // loop through the questions
	  loopBasic();
	});
}

function readCloze(){
	fs.readFile("cloze.json", "utf8", function(error, data) {
	  if (error) {
	    return console.log(error);
	  }
	  //parse the data from the basic.json file and store it in a variable
	  cards = JSON.parse(data);
	  // console.log(cards[0].partial)
	  // console.log(cards[0].cloze)

	  // loop through the questions
	  loopCloze();
	});
}
