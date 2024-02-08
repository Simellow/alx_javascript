//creating a function divideBy
function divideBy (firstNumber){
    return function(secondNumber){
        return secondNumber / firstNumber
    }
}

//creating a function addBy
function addBy (firstNumber){
    return function (secondNumber){
        return firstNumber + secondNumber
    }
}

//creating closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);


