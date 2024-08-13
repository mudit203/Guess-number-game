const randno = parseInt(Math.random()*100+1)
const subbmit = document.querySelector('#subt')
const userinput = document.querySelector('#blank1')
const guesses = document.querySelector('.prevguess')
const remainingGuesses = document.querySelector('.remguess')
const loworhi = document.querySelector('.loworhi')
const resultparas = document.querySelector('.guesses')
const p = document.createElement('p')
let previousguess = []
let numguess = 1
let playgame  = true
//first function to check weather the user input is a valid number or not
if (playgame) {
    subbmit.addEventListener('click', function (e) {
        e.preventDefault();
        const inpt = parseInt(userinput.value); // Get user input inside the event listener
        console.log(inpt);
        validateguess(inpt);
    });
}

function validateguess(guess){
    if(isNaN(guess)||guess>100||guess<1){
      alert('please enter a valid number')
    }
    else{
        previousguess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displaymessage(`game over.Random number was ${randno}`)
            endgame()
           
        }
        else {
            displayguess(guess)
            checkguess(guess)
        }
    }

}

//second function to print weather the user input is correct guess or not

function checkguess(guess){
if(guess===randno){
    displaymessage(`right guess`)
    endgame()
}else if(guess<randno){
    displaymessage(`too low`)
}
else if(guess>randno){
    displaymessage(`too high`)
}
}

function displayguess(guess){
userinput.value = ''
guesses.innerHTML +=`${guess},  ` 
numguess++
remainingGuesses.innerHTML = `${11-numguess}`
}

// function to display message
function displaymessage(message){
loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
userinput.value = ''
playgame = false
p.classList.add('button')
userinput.disabled = true
p.innerHTML = '<h2 id="newgame">start new game</h2>'
guesses.appendChild(p)
subbmit.disabled = true
newgame()

}
function newgame(){
   const newgamebutton = document.querySelector('#newgame')
   newgamebutton.addEventListener('click',function(f){
    const randno = parseInt(Math.random()*100+1)
    numguess = 1
    subbmit.disabled = false
    userinput.disabled = false
    previousguess = []
    playgame = true
    remainingGuesses.innerHTML = `${11-numguess}`
    guesses.removeChild(p)
    guesses.innerHTML = ''
    

   })
}

//
//document.querySelector('.images').addEventListener('click',function(e){
            

//})