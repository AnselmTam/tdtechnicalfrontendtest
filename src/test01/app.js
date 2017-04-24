'use strict';

var app = angular.module('myApp', ['pascalprecht.translate']);


app.config(['$translateProvider', function ($translateProvider) {

	$translateProvider.translations('en', {
		TITLE: "Book an Appointment",
		SUBHEADER: "Our Investing Topics",
		PICKATOPIC: "Pick a topic we'll find you a time and place",
		RETURN: "Return to previous screen",
		BUTTON_LANG_EN: "english",
		BUTTON_LANG_FR: "french"
	});

	$translateProvider.translations('fr', {
		TITLE: "Prenez rendez-vous",
		SUBHEADER: "Nos sujets d'investissement",
		PICKATOPIC: "Choisissez un sujet, nous vous trouverons un moment et un lieu",
		RETURN: "Retour à l'écran précédent",
		BUTTON_LANG_EN: "anglais",
		BUTTON_LANG_FR: "français"
	});

	$translateProvider.preferredLanguage('en');
}]);


export const test01 = {
	template: require('./app.html'),
	controller($http) {
		var state = this;
		state.data = [];
//returns a promise based callback of the json data 
//Running a nested for loop to populate the array and then push out a new array to format the data 
		$http.get('test01/data.json').then(function(result), (fail) {
			for (var prop in result.data) {
				var text = result.data[prop];
				for (var i in text) {
					state.data.push(text[i]) 
				}
			}
			.catch(handleError);
			if (result.data.length == 1) {
				var showOnlyOne = state.data[0]; 
			}
		})

		this.state = state;
	}

};

