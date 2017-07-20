  // global vars
var userChoice;
var cpuChoice;
  //array of all choices for the selection
var g = ["rock","paper","scissors","lizard","spock"];
  //image objects of all pictures
var pics = {
  rock: "https://s5.postimg.org/n51ehep6f/rock.jpg",
  paper: "https://s5.postimg.org/6iju8bw8n/61394-400x300-_Yellow_paper.jpg",
  scissors: "https://s5.postimg.org/6wl67xgc7/scissors.jpg",
  lizard: "https://s5.postimg.org/6xv41ci5z/lizard.jpg",
  spock: "https://s5.postimg.org/451whbhtj/spock.jpg"
}
//var addImage;

//appends the result answer to replace the orginal results sentence 
  //using the class result
function results () {
  $('.result').text(result)
}

function expl () {
  $('#explain').text(explain)
}


// computer choices its choice
function getComputerChoice() {
  var ranNum = Math.floor(Math.random() * 5);
  cpuChoice = g[ranNum];
  //console.log(cpuChoice);
  }

//main function
  //function starts the game
function playGame(choice) {
  //envokes the function for the cpu to pic a choice of weapon
  getComputerChoice();
  //the choice of weapon from the button click becomes userChoice
  userChoice = choice;
  console.log("u:"+ userChoice +" c:" +cpuChoice);
  
  //envokes the function that shows the results from the 2 choices
  pickWinner(userChoice, cpuChoice)
  console.log(result);
  
  //envokes the function to append the results of the game in the
  //results tab at the top
  results();
  
  expl();
  
  var userImage = images(userChoice, pics);
  var cpuImage = images(cpuChoice, pics);
  addImage(userImage,cpuImage,userChoice,cpuChoice);

}


function images (inputChoice, pics){
  switch (inputChoice) {
    case "rock":
      return pics.rock;
    case "paper":
      return pics.paper;
    case "scissors":
      return pics.scissors;
    case "lizard":
      return pics.lizard;
    case "spock":
      return pics.spock;
}
}    
function addImage (userImage,cpuImage){ $('#imageLeft').attr("src",userImage)
$('#imageRight').attr("src",cpuImage) 
                                                                           
}





function pickWinner (userChoice,cpuChoice) {
  if (userChoice === cpuChoice) {
    result ="YOU HAVE TIED!";
    explain ="TRY AGAIN";
    return;
  } 
  if (userChoice === "rock") {
    if(cpuChoice === "paper") {
      result ="COMPUTER WINS";
      explain ="Paper Covers Rock";
    } else if (cpuChoice === "spock") {
      result ="COMPUTER WINS";
      explain ="Spock Vaporizes Rock";
    } else if (cpuChoice === "scissors") {
      result ="YOU WIN!!!";
      explain ="Rock Smashes Scissors";
    } else if (cpuChoice === "lizard") {
      result ="YOU WIN!!!";
      explain ="Rock Crushes Lizard";
    } 
    return;
  }
  if (userChoice === "scissors") {
     if (cpuChoice === "rock") {
       result ="COMPUTER WINS";
       explain ="Rock Crushes Scissors";
     } else if (cpuChoice === "paper") {
       result ="YOU WIN!!!";
       explain ="Scissors Cut Paper";
     } else if (cpuChoice === "lizard") {
       result ="YOU WIN!!!";
       explain ="Scissors Decapitates Lizard";
     } else if (cpuChoice === "spock") {
       result ="COMPUTER WINS";
       explain ="Spock Smashes Scissors";
     }
    return;
  }
  if (userChoice === "spock") {
     if (cpuChoice === "paper") {
       result = "COMPUTER WINS";
       explain = "Paper Disproves Spock";
     }  else if (cpuChoice === "rock") {
       result = "YOU WIN!!!";
       explain = "Spock Vaporizes Rock";
     }  else if (cpuChoice === "scissors") {
       result = "YOU WIN!!!";
       explain = "Spock Smashes Scissors";
     }  else if (cpuChoice === "lizard") {
       result = "COMPUTER WINS";
       explain = "Lizard Poisons Spock";
     } 
    return;
  }
  if (userChoice === "lizard") {
     if (cpuChoice === "rock") {
       result = "COMPUTER WINS";
       explain = 'Rock Crushes Lizard';
    } else if (cpuChoice === "spock") {
       result = "YOU WIN!!!";
       explain = 'Lizard Poisons Spock';
    } else if (cpuChoice === "paper") {
       result = "YOU WIN!!!";
       explain = 'Lizard Eats Paper';
    } else if (cpuChoice === "scissors") {
       result = "COMPUTER WINS";
       explain = 'Scissors Decapitates Lizard';
    }
    return;
  }
  if (userChoice === "paper") {
     if (cpuChoice === "scissors") {
       result = "COMPUTER WINS";
       explain = 'Scissors Cuts Paper';
    } else if (cpuChoice === "lizard") {
       result = "COMPUTER WINS";
       explain = 'Lizard Eats Paper';
    } else if (cpuChoice === "rock") {
       result = "YOU WIN!!!";
       explain = 'Paper Covers Rock';
    } else if (cpuChoice === "spock") {
       result = "YOU WIN!!!";
       explain = 'Paper Disproves Spock';
    }
    return;
  }
}