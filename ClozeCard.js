function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		this.fullText = text; // fullText

		this.cloze = cloze;

		this.cutText = function(){
			if(this.fullText.search(this.cloze) == -1){
				return console.log('Error: the cloze deletion does not appear in the input text\n')
			}
			else{
				this.partial = this.fullText.replace(this.cloze, "...");
			}
		};
	}

	else{
		return new ClozeCard(text, cloze);
	}

};


// var test = ClozeCard('George Washington is the first president', 'George Washington');

// test.cutText();
// console.log(test)
// var x = {fullText: test.fullText, cloze:test.cloze, partial:test.partial}
// console.log(x)

// var obj = {test[fullText, test.cloze, test.partial}
// console.log(obj)
// var arr = [];
// arr.push(test)
// console.log(arr)

// console.log('=============================');
// console.log(test.fullText);
// console.log('=============================');
// console.log(test.cloze);
// console.log('=============================');
// console.log(test.partial);
// console.log('=============================');


// var testFail = ClozeCard('George Washington is the first president', 'Micky');
// testFail.cutText();

// console.log(testFail);

module.exports = ClozeCard; 