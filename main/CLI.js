var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');
var fs = require("fs");
var inquirer = require("inquirer");

// arrays for storing basic or cloze cards
var basicArr = [];
var clozeArr = [];

// variable to keeps track of the recursive loop
var countB = 0
// function to create Basic objects and
function addBasic(){
	//the function will loop until 2 basic cards are made
	if(countB<5){
		// ask for question and answer
		inquirer.prompt([
		{
			type: 'input',
			message: "Input the question",
			name: 'ques'
		},
		{
			type: 'input',
			message: "Input the answer",
			name: 'ans'
		}
	]).then(function(input){

		//check that neither questions or answers are not empty
		if(input.ques !== '' || input.ans !== ''){
			//the count goes up is the input is valid
			countB++;
			//use the Basic module to create an object
			var test = Basic(input.ques, input.ans);
			// push it to the array
			basicArr.push(test);
			// recursive loop till countB reaches the required #
			addBasic();
		}
		else{
			// if either questions or answers are empty show message
			// and call the function again without increasing the count
			console.log("Please input a question and answer\n");
			addBasic();
		}
		});
	}
	
	// once the loop ends execute the code below
	else{
		// create a new basic.json file to store the cards. The 
		fs.writeFile('basic.json', JSON.stringify(basicArr), function (err){
			if(err){
				console.log(err);
			}
			else{
				console.log('Your Q&A has been written into the basic.json file.')
				console.log(basicArr)
			}
		});
	}
}

// variable to keeps track of the recursive loop
var countC = 0
// function to create Cloze objects and
function addCloze(){
	//the function will loop until 2 basic cards are made
	if(countC<5){
		// ask for question and answer
		inquirer.prompt([
		{
			type: 'input',
			message: "Input the full sentence\n",
			name: 'fullText'
		},
		{
			type: 'input',
			message: "Input part you wish to ommit\n",
			name: 'cloze'
		}
	]).then(function(input){

		//check that neither questions or answers are not empty
		if(input.fullText !== '' || input.cloze !== ''){
			//use the Basic module to create an object
			var clo = Cloze(input.fullText, input.cloze);
			clo.cutText();
			if(clo.fullText.search(clo.cloze) == -1){
				addCloze();
			}
			else{
				// create a new object with the function cutText removed
				var x = {fullText: clo.fullText, cloze: clo.cloze, partial: clo.partial}
				// push it to the array
				clozeArr.push(x);
				//the count goes up is the input is valid
				countC++;
				// recursive loop till countB reaches the required #
				addCloze();
			}
		}
		else{
			// if either questions or answers are empty show message
			// and call the function again without increasing the count
			console.log("Please input a question and answer\n");
			addCloze();
		}
		});
	}
	
	// once the loop ends execute the code below
	else{
		// create a new basic.json file to store the cards. The 
		fs.writeFile('cloze.json', JSON.stringify(clozeArr), function (err){
			if(err){
				console.log(err);
			}
			else{
				console.log('Your Q&A has been written into the basic.json file.')
				console.log(clozeArr)
			}
		});
	}
}




inquirer.prompt([
	{
		type: 'list',
		name: 'type',
		message: 'Pick the type of card you want to create',
		choices: ['Basic Card', 'Cloze Card']
	}
  	]).then(function(answer){
  		if(answer.type === 'Basic Card'){
  			addBasic();
  		}
  		else if(answer.type == 'Cloze Card'){
  			addCloze();
  		}
});






