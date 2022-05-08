
const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter =1;
let endgame= false;
let guessed = false;
const wordle = 'hunts';
const wordElements = document.querySelectorAll('.row');
buttonElements.forEach((element) => {
     element.addEventListener('click', function() {
        eventkeyboardpress(element.attributes["data-key"].value)
     });
    });
 

function wword(key){
  if(letter <6) {
        wordElements[row-1].querySelectorAll('.word')[letter-1].innerText = key;
letter+= 1;
   } else{
 
   }
          
}
function  checker(){
    let correctGuess =0;
 const enteredWord =   wordElements[row -1].querySelectorAll('.word');
enteredWord.forEach((element,index) => {
  const indexofWordle = wordle.toLowerCase().indexOf(element.innerText.toLowerCase());
  if(indexofWordle == index) {
      element.classList.add('word-correct');
correctGuess+= 1;
  }
   else if (indexofWordle > 0){
    element.classList.add('word-wrongplace');
   } else{
    element.classList.add('word-incorrect');
   }
}); 
  if(correctGuess ==5){
      endgame= true;
      guessed = true;
      alert('Correct Guess!')
  } else if(row == 6){
endgame = true;
alert('You failed!')
  }
   
}
function del () {
  const currWord =  wordElements[row-1] .querySelectorAll('.word');
     for (let i = currWord.length-1; i >= 0; i--) {
         const element = currWord[i];
         if(element.innerText != '') {
           element.innerText = '';
             letter-=1;
             break;
         }
 
     }
}
function enterw(){
    if(letter < 6){
     alert('Please Enter More Letters');
   } else {
        checker();
        row+=1;
       letter =1;
    }
}
function eventkeyboardpress(key)
 {
     if(!endgame){
         if(key.toLowerCase()== 'enter'){
    enterw();  }

 else if (key.toLowerCase() == 'del'){
    del();
} else {
    wword(key);
}  
     } else{
         alert('Max Attempt Reached')
     }
 
}