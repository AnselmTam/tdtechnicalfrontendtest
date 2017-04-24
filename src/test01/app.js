'use strict';

var app = angular.module('app,' ['pascalprecht.translate']);

app.config(function ($translateProvider) {
	$translateProvider.fallbacklanguage('en');
	$translateProvider.registerAvailableLanguageKeys(['en', 'fr']),{
		//teach app to ignore variation i.e. en_us
		'en_*':'en',
		'fr_*':'fr'
	};

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
});


app.controller('ctrl',['$translate', function(translate) {
	var vm = this;
	vm.changeLanguage = function(key) {
		$translate.use(key);
	};
}]);



export const test01 = {
	template: require('./app.html'),
	controller($http) {
		var state = this;
		state.data = [];


//returns a promise based callback of the json data 
//Running a nested for loop to populate the array and then push out a new array to format the data 

		$http.get('test01/data.json').then(function(result) {
			for (var prop in result.data) {
				var item = result.data[prop];
				for (var i in item) {
					state.data.push(item[i]) 
				}
			}
			if (result.data.length == 1) {
				var oneButton = state.data[0]; 
			}
		})

		this.state = state;
	}

};

