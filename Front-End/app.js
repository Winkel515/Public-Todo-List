
const weatherText = document.getElementById('weatherText');
const todoInput = document.getElementById('todoInput');
const displayWeatherLocation = document.getElementById('displayWeather');






    var todo = todoInput.value;

    var xhr = new XMLHttpRequest();
    var url = `https://immense-sierra-23036.herokuapp.com/todos`;

let todoData ;

xhr.open("GET", url, true);
xhr.send();
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            todoData = JSON.parse(xhr.responseText); 
            console.log(todoData);
            console.log(xhr.responseText);
            for(var i = 0; i < todoData.todos.length; i++){
                let ul = document.getElementsByTagName('ul')[0];
                let li = document.createElement('li');
                li.textContent = todoData.todos[i].value;
                ul.appendChild(li);
            }            
        }
    }
};
// console.log(weatherData); why doesnt it work here















