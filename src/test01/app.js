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
		});

		this.state = state;
	}

};

