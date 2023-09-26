function show_weather() {
    
    console.log("**** [START] show_weather() *****");
    let div_weather_box_innerHTML_str = "";

    // Declare the city variable
    let city = 'Singapore';

    // Construct the API endpoint URL with dynamic values
    let apiKey = "cc631561d487588316489d66cb6f33bb"; // Replace with your actual API key
    let api_endpoint_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(api_endpoint_url);

    axios.get(api_endpoint_url)
    .then(response => {
        let weather_data = response.data;
        console.log(weather_data);

        // Access weather properties directly
        let main = weather_data.main;

        let weatherArray = weather_data.weather; // Access the weather array

        // Assuming you want the first weather condition in the array
        let weather = weatherArray.length > 0 ? weatherArray[0].main:"N/A";
        let temperature = main.temp;
        let humidity = main.humidity;

        // Construct the HTML for the weather box
        div_weather_box_innerHTML_str = `
            <div id="weather-box" class="border bg-light p-3 mt-3">
                <!-- Weather Information -->
                <div class="card">
                    <div class="card-header">
                        Weather Information
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Weather Main:
                            <span id="today-pick-city-weather-main" style="font-weight: bold;">${weather}</span>
                        </li>
                        <li class="list-group-item">
                            Temperature:
                            <span id="today-pick-city-temperature" style="font-weight: bold;">${temperature}</span>
                        </li>
                        <li class="list-group-item">
                            Humidity:
                            <span id="today-pick-city-humidity" style="font-weight: bold;">${humidity}</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        // Set the updated HTML for the weather box and make it visible
        document.getElementById("weather-box").innerHTML = div_weather_box_innerHTML_str;
        // document.getElementById("weather-box").style.display = "block";

    })
    .catch(error => {
        // Handle errors here
        console.log(error.message);
    });

    console.log("**** [END] show_weather() *****");
}
