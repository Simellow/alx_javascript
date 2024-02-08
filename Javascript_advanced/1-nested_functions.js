//globalVariable with value Welcome
const globalVariable = `Welcome`; //globalVariable with value Welcome
function outer (){
    alert(globalVariable); //function "outer" that alerts the content of the variable globalVariable &creates a variable named course with value Holberton
    const course = `Holberton`;
    function inner () {
        alert(globalVariable + " " + course);// a function "inner" that alerts the content of the variable globalVariable and course & creates a variable named exclamation with value !
        const exclamation = `!`;
        function inception (){
            alert(globalVariable + " " + course + exclamation); // function "inception" that alerts the content of the variable globalVariable, course, and exclamation 
        }
        inception()//calling the function inception
    }
    inner()//calling the function inner
}
outer()//calling the function outer
