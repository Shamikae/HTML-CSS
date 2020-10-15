//Notes    
    // target elements in HTMl from JS
var display = document.querySelector('#screen');
var buttons = document.querySelectorAll('.button');
    // function to display text in screen
var inputChange = (event) => {
    display.innerText += event.target.innerText; // += concatenate string
}

//Function that evaluates operator split input into an array 
var myEval = () => {
    var operator = display.innerText.match(/[^0-9]/g)    //The method match() searches string for  0-9 returning matches as an array(must include g modifier to perform a global search otherwise it will return only the first match)
    var arr = display.innerText.split(operator);
    
    for(var i = 0; i < arr.length; i++){
        if( operator == '+'){
            display.innerText = Number(arr[0]) + Number(arr[1]);
        }
        if( operator == '-'){
            display.innerText = Number(arr[0]) - Number(arr[1]);
        }
        if( operator == '*'){
            display.innerText = Number(arr[0]) * Number(arr[1]);
        }
        if( operator == '/'){
            display.innerText = Number(arr[0]) / Number(arr[1]);
        }
        
    
    }
}
//function eventListeners fires when a user clicksa button
var eventListeners = (arr) => {   
    
    for(var i = 0; i < arr.length; i++){
        if (arr[i].innerText == '='){
            arr[i].addEventListener('click', myEval)
        }else{
            arr[i].addEventListener('click', inputChange)
        }
        
    }
}
eventListeners(buttons)



