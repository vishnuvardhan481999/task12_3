document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://api.weather.gov/stations/KJFK/observations/latest');
    const data = await response.json();
    const metar = data.properties.textDescription;

    document.getElementById('metarData').innerText = metar;
});