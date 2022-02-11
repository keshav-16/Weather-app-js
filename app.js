var button = document.querySelector('.btn');
var input = document.querySelector('.box');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var des = document.querySelector('.des');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=08d23bc6e309518bbf96b1f64359bcd7')
    .then(response => response.json())
    .then(data => {
        var cityvalue = data['city'];
        var tempvalue = data['main']['temp'];
        var desvalue = data['weather'][0]['description'];

        city.innerHTML = cityvalue ;
        temp.innerHTML = tempvalue +"  F";
        des.innerHTML = desvalue;
    })

    .catch(err => alert("Wrong city"))
})
