//creating a function named changeMode
function changeMode (size, weight, transform, background, color){
    return function() {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;}
}

//creating function main that passes arguments to different modes
function main (){
    // setting variables and passing arguments to different modes
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
    //adding a paragraph to the body
    const welcomeText = document.createElement("p");
    welcomeText.textContent = "Welcome Holberton!";
    document.body.appendChild(welcomeText);
    
    //adding buttons to change between different modes:
    //spooky button 
    const spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);
    
    //dark mode button
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark mode";
    darkModeButton.addEventListener("click", darkMode);
    document.body.appendChild(darkModeButton);
    
    //scream mode button
    const screamModeButton = document.createElement("button");
    screamModeButton.textContent = "Scream mode";
    screamModeButton.addEventListener("click", screamMode);
    document.body.appendChild(screamModeButton);
}
//calling the main function to set the page up
main()