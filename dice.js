const mybutton = document.getElementById("roll");
const mylabel = document.getElementById("label");
const diceIcon = document.getElementById("fa-dice-d6");


let max = 6;

const diceClasses = [
    "fa-dice-one",
    "fa-dice-two",
    "fa-dice-three",
    "fa-dice-four",
    "fa-dice-five",
    "fa-dice-six"
]

mybutton.addEventListener("click" , function (){
     diceIcon.classList.remove("rotate-dice"); //Reset animation
     void diceIcon.offsetWidth;  //Force reflow to restart animation
     diceIcon.classList.add("rotate-dice");

    //Generate random roll
   const randomnum = Math.floor (Math.random() * max) ;
   const diceClass  = diceClasses[randomnum];

   //update label
   mylabel.textContent = `You rolled : ${randomnum + 1 }`;

   //Replace the dice icon class  {
    diceIcon.classList.remove(...diceClasses); //Remove all dice faces
    diceIcon.classList.add(diceClass); //Add current face
});