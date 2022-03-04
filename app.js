const setInputText = (id)=>{
    const input = document.getElementById(id);
    return input;
}

const API_KEY = `f697ec6e8164c7afba1be033fbd33bde`;
const searchTemperature = () => {
    const city = setInputText('input-city').value;

    //clear input field
    setInputText('input-city').value ='';

    const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(api)
    fetch(api)
        .then(response => response.json())
        .then(data => displayTemperature(data));
    

}

const displayTemperature = temperature =>{
    // console.log(temperature)
    const cityName = setInputText('city-name');
    cityName.innerText = `${temperature.name}`;
    // console.log(cityName.innerText)

    const celcius = setInputText('celcius');
    celcius.innerText = `${temperature.main.temp}`;
    // console.log(celcius.innerText);

    const condition = setInputText('condition');
    condition.innerText =`${temperature.weather[0].main}`;
    // console.log(condition.innerText);

    //set weather icon

    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
     const weatherIcon = document.getElementById('weather-icon');
     weatherIcon.setAttribute('src' , url);
}