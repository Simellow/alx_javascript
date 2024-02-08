// The value assigned to it is an immediately invoked function expression (IIFE). The IIFE creates a closure, allowing us to encapsulate private variables and methods.
const studentHogwarts = (function () {
   
    // Declaring two private variables: privateScore (initialized to 0) and name (initialized to null)
    let privateScore = 0;
    let name = null;

    // We define a private method called changeScoreBy that takes an argument points and adds it to the privateScore.
    const changeScoreBy = function (points) {
      privateScore += points;
    };

    //Using object literals to create our objects directly without using a constructor function, we return an object containing four public methods:
    return {
    //setName(newName): Sets the private variable name to the provided newName
      setName: function(newName) {
        name = newName;
      },

    //rewardStudent(): Calls changeScoreBy(1) to increase the score.
      rewardStudent: function() {
        changeScoreBy(1);
      },

    //penalizeStudent(): Calls changeScoreBy(-1) to decrease the score.
      penalizeStudent: function() {
        changeScoreBy(-1);
      },

    //getScore(): Returns a formatted string with the student’s name and score.
      getScore: function () {
        return `${name}: ${privateScore}`;
      },
    };
  })();

  //We create an instance harry using Object.create(studentHogwarts)
  const harry = Object.create(studentHogwarts);
  //Set the name to “Harry”.
  harry.setName("Harry");
  //Rewarding Harry four times because he's such a good boi
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  //Log the score to the console.
  console.log(harry.getScore());


  //We create another instance draco.
  const draco = Object.create(studentHogwarts);
  //Set the name to “Draco”.
  draco.setName("Draco");
  // Reward Draco once and penalize three times becuase he's always upto no good
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
   // Log the score to the console.
  console.log(draco.getScore());