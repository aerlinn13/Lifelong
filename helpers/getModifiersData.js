import axios from 'axios';

export const getModifiersData = (currentData, version, setDataVersion, downloadData, setWhatsNew) => {
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
							setDataVersion(res.data.version, res.data.notes);
							downloadData(response.data);
							const newDataLength = response.data.length - currentData.length;
							setWhatsNew(response.data.slice(-newDataLength));
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
