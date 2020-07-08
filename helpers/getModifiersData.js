import axios from 'axios';

export const getModifiersData = () => {
	axios
		.get('https://raw.githubusercontent.com/aerlinn13/lifelong-data/master/lifespanModifiers.json')
		.then(function(response) {
			// handle success
			console.log(response.data);
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
};
