//var express = require("express");

var friendList = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendList);
	});

	app.post("/api/friends", function(req, res) {
		var friendFound = {
			name: "",
			photo: "",
			score: 1000
		}

		var userData = req.body;

		var difference = 0;

		for (var i = 0; i < friendList.length; i++) {

			difference = 0;

			for (var x = 0; x < friendList[i].answerArray[x]; x++) {
				difference += Math.abs(parseInt(userData.answerArray[x]) - parseInt(friendList[i].answerArray[x]));
				console.log(userData.answerArray[x]); 

				if (difference <= friendFound.score) {
					friendFound.name = friendList[i].name;
					friendFound.photo = friendList[i].photo;
					friendFound.score = difference;
				}
			}
		}

		friendList.push(userData);
		res.json(friendFound);
	});
};