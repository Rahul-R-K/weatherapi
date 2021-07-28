let city
function display(){// this function display the processed data in weather function
    city = document.getElementsByClassName('myText')[0].value;
    document.getElementsByClassName('myText')[0].value ="";
    //document.getElementById('body').innerHTML ="";
    weather()
}
    async function weather(){//This function Fetch the required data from api 
let resp=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=51a0780cc3e7ff809ccc53e63dba4764")
let data=await resp.json()
   try{
       console.log(data)
    let temp = data.main.temp;
    let description = data['weather'][0]['description'];
    let feels = data.main.feels_like;

    document.getElementsByClassName('main')[0].innerHTML = "CITY :  " + (city.charAt(0).toUpperCase()+ city.slice(1));
    document.getElementsByClassName('main')[1].innerHTML = "TEMPERATURE : " + (Math.floor(temp-273.1)+"°C");
    document.getElementsByClassName('main')[2].innerHTML = "WEATHER CONDITION :  " + (description.charAt(0).toUpperCase()+ description.slice(1));
    document.getElementsByClassName('main')[3].innerHTML = "FEELS LIKE : " + (Math.floor(feels-273.1)+"°C");
   }
catch{
    alert('Please enter a valid city name')
}
}
