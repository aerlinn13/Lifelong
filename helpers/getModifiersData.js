import axios from 'axios';

export const getModifiersData = (version, setDataVersion, downloadData) => {
	console.log('fetching', version);
	axios
		.get('https://raw.githubusercontent.com/aerlinn13/lifelong-data/master/version.json')
		.then(function(res) {
			// handle success
			if (res.data && res.data.version && res.data.version !== version) {
				console.log(res.data.version);
				axios
					.get('https://raw.githubusercontent.com/aerlinn13/lifelong-data/master/lifespanModifiers.json')
					.then(function(response) {
						// handle success
						if (response.data && response.data.length) {
							setDataVersion(res.data.version);
							downloadData(response.data);
						}
					})
					.catch(function(error) {
						// handle error
						console.log(error);
					});
			}
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		});
};
