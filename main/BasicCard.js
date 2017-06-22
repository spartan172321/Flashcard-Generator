
function BasicCard(front, back){
	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
	}
	else{
		return new BasicCard(front, back);
	}
};

// var test = BasicCard('Who is the first US president?', 'George Washington');

// console.log(test);

module.exports = BasicCard; 