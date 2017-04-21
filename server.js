var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var inquirer = require("inquirer");

//var app = express();
//var port = 3000;

/*var newUser = function(newName, newPhoto, newScore){
	this.newName = newName;
	this.newPhoto = newPhoto;
	this.newScore = newScore;
}*/

var runProgram = function() {

	var answerArray = [];

	inquirer.prompt([
		{
			type: "confirm",
    		message: "Would you like to find a friend ? :)",
    		name: "confirm",
    		default: true
		}
	]).then(function(input){
		if (input.confirm) {
			//start inner-inquirer
			inquirer.prompt([
				{
					name: "name",
					message: "What is your name?"
				},

				{
					name: "photo",
    				message: "Type in a link to your photo"
				},

				{
					type: "list",
					name: "one",
    				message: "Your mind is always buzzing with unexplored ideas and plans",
    				choices: ["1", "2", "3", "4", "5"]
				},

				{
					type: "list",
					name: "two",
    				message: "Generally speaking, you rely more on your experience than your imagination.",
    				choices: ["1", "2", "3", "4", "5"]
				},

				{
					type: "list",
					name: "three",
    				message: "You find it easy to stay relaxed and focused even when there is some pressure.",
    				choices: ["1", "2", "3", "4", "5"]
				},

				{
					type: "list",
					name: "four",
    				message: "You rarely do something just out of sheer curiosity.",
    				choices: ["1", "2", "3", "4", "5"]
				},

				{
					type: "list",
					name: "five",
    				message: "People can rarely upset you.",
    				choices: ["1", "2", "3", "4", "5"]
				}

			]).then(function(choice){

				//var userProfile = new newUser(choice.name, choice.photo, answerArray);

				answerArray.push(choice.one);
				answerArray.push(choice.two);
				answerArray.push(choice.three);
				answerArray.push(choice.four);
				answerArray.push(choice.five);

				//var userProfile = new newUser(choice.name, choice.photo, answerArray);

				var userProfile = {
					newName: choice.name,
					newPhoto: choice.photo,
					newScore: answerArray
				}

				console.log(userProfile)

				fs.appendFileSync("profiles.txt", JSON.stringify(userProfile) + "\n");

				//console.log(answerArray.JSON.stringify());

				/*if (choice.one === "2") {
					console.log("We did it dog!")
				}
				else {
					console.log(":(");
				}*/
			});
			//end inner-inquirer
		}
		else {
			console.log("See you later!");
		}
	});
}

runProgram();


//app.listen(port);