const callApi = async () => {
	let headersList = {
		"Accept": "*/*",
	}

	const response = await fetch("http://localhost:3000/api/ip/", {
		method: "GET",
		headers: headersList
	});

	let data = await response.json();
	console.log(data);
	alert(`ip -----> ${data.ip}\nCountry ------> ${data.country_name}\nCity ------> ${data.city}\nLatitude -----> ${data.latitude}\nLongitude -----> ${data.longitude}`);
};


callApi();