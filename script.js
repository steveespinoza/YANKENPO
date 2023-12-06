function getComputerChoice(){
    function randomNumber(max){
      return Math.floor(Math.random()*max);
    }
    let number=randomNumber(3);
    if (number === 0){
      return "Rock";
    }
    else if (number === 1){
      return "Paper";
    }
    else{
      return "Scissors";
    }
  }
  function playRound(playerSelection, computerSelection) {
    let choice=playerSelection.toLowerCase();
    if (choice==="rock" && computerSelection==="Scissors"){
      return "You Win!";
    }
    else if (choice==="paper" && computerSelection==="Scissors"){
      return "You Lose!";
    }
    else if ((choice==="scissors" && computerSelection==="Scissors")||
    (choice==="paper" && computerSelection==="Paper")||
    (choice==="rock" && computerSelection==="Rock")){
      return "Its a tie";
    }
    else if (choice==="rock" && computerSelection==="Paper"){
      return "You Lose!";
    }
    else if (choice==="scissors" && computerSelection==="Paper"){
      return "You Win!";
    }
    else if (choice==="paper" && computerSelection==="Rock"){
      return "You Win!";
    }
    else if (choice==="scissors" && computerSelection==="Rock"){
      return "You Lose!";
    }
  }

  
  
  function game(){
    
    let x=0,y=0,z=0;
    
      let input = prompt("Rock, Paper o Scissors??");
      let computer=getComputerChoice();
      console.log(playRound(input,computer));
      let result=playRound(input,computer);
      if (result === "You Win!"){
        console.log(`${input.toUpperCase()} beats ${computer.toUpperCase()}`);
        x+=1;
      }
      else if (result==="You Lose!"){
        console.log(`${computer.toUpperCase()} beats ${input.toUpperCase()}`);
        y+=1;
      }
      else {
        z+=1;
      }
    
    if (x>y){
      console.log("YOU'RE THE WINNER");
    }
    else if (y>x){
      console.log("YOU'RE THE LOSER");
    }
    else{
      console.log("YOU TIED");
    }  
  }

  

const buttons = document.querySelectorAll('button');
let computerpoints=0;
let userpoints=0;
let points1=0;
let points2=0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const body = document.querySelector('body');
        const content = document.createElement('div');
        let computer = getComputerChoice();
        const playagain = document.createElement('button');
        playagain.classList.add('reload');
        playagain.textContent = 'PLAY AGAIN!';
        const score1 = document.createElement('div');
        score1.classList.add('score1');
        const score2 = document.createElement('div');
        score2.classList.add('score2');
        const score=document.querySelector('.score');
        if(button.id == "rock"){
          content.textContent = playRound(button.id,computer);
            if (content.textContent == "You Win!"){
              userpoints++;
              points1=userpoints;
            }
            else if (content.textContent == "You Lose!"){
              computerpoints++;
              points2=computerpoints;
            } 
        }
        else if(button.id == "scissors"){
          content.textContent = playRound(button.id,computer);
            if (content.textContent == "You Win!"){
              userpoints++;
              points1=userpoints;
            }
            else if (content.textContent == "You Lose!"){
              computerpoints++;
              points2=computerpoints;
            } 
        }
        else if(button.id == "paper"){
          content.textContent = playRound(button.id,computer);
          if (content.textContent == "You Win!"){
            userpoints++;
            points1=userpoints;
          }
          else if (content.textContent == "You Lose!"){
            computerpoints++;
            points2=computerpoints;
          } 
        }    
        body.appendChild(content);
        score.textContent= "YOU:" + points1 + "COMPUTER:" + points2; 
        const content1 = document.createElement('div');
        if (userpoints === 5){
          content1.textContent= "CONGRATULATIONS, MR.WINNER";
          buttons.forEach((button) => {
            button.disabled=true});
            body.appendChild(content1); 
            body.appendChild(playagain);
            const reload = document.querySelector('.reload');
            reload.addEventListener('click',()=>{
              location.reload();
            }) 
        }
        else if(computerpoints === 5){
          content1.textContent= "SO SORRY, MR.LOSER";
          buttons.forEach((button) => {
            button.disabled=true});
            body.appendChild(content1);
            body.appendChild(playagain);   
            const reload = document.querySelector('.reload');
            reload.addEventListener('click',()=>{
              location.reload();
            })
        }
    });
});
        
        
  