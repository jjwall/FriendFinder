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

var profileArray = [];

var friendArray;

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
					name: choice.name,
					photo: choice.photo,
					score: answerArray
				}

				//console.log(userProfile)

				profileArray.push(userProfile);

				//console.log(profileArray[0].newName);

				fs.appendFileSync("profiles.txt", ",\n" + JSON.stringify(userProfile));

				fs.readFile(__dirname + "/profiles.txt", "utf8", function(err, data){
					var output;
					if (err) {
						output = "[]";
					}
					else {
						output = '[' + data + ']';
					}
					this.server = JSON.parse(output);
					console.log(this.server[0].name);
					//console.log(friendArray);
				});

				//console.log(JSON.stringify(userProfile));

				//var obj = JSON.parse(fs.readFileSync("profiles.txt", "utf8"));

				//for (var profile in obj) {
				//	console.log(profile);
				//}

				//console.log(obj);


				//var obj = JSON.parse(fs.readFileSync("profiles.txt", "utf8"));

				//console.log(userProfile[0].newName);

				/*if (choice.one === "2") {
					console.log("We did it dog!")
				}
				else {
					console.log(":(");
				}*/

				//runProgram();
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