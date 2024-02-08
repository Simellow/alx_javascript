function welcomeMessage (fullName) {
    return function(){
        alert(`Welcome ${fullName}`);//to create a closure, we use an anonymus function that relies on it's lexical enviroment 
    };
}

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");



