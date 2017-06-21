function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		this.fullText = text; // fullText

		this.cloze = cloze;

		this.cutText = function(){
			if(this.fullText.search(this.cloze) == -1){
				return console.log('Error: the cloze deletion does not appear in the input text')
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


var test = ClozeCard('George Washington is the first president', 'George Washington');

test.cutText();

console.log('=============================');
console.log(test.fullText);
console.log('=============================');
console.log(test.cloze);
console.log('=============================');
console.log(test.partial);
console.log('=============================');


var testFail = ClozeCard('George Washington is the first president', 'George Washington');
testFail.cutText();
// console.log(testFail);

module.exports = ClozeCard; 