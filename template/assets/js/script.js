const oneBtn = document.getElementById("calc-one");
const twoBtn = document.getElementById("calc-two");
const threeBtn = document.getElementById("calc-three");
const fourBtn = document.getElementById("calc-four");
const fiveBtn = document.getElementById("calc-five");
const sixBtn = document.getElementById("calc-six");
const sevenBtn = document.getElementById("calc-seven");
const eightBtn = document.getElementById("calc-eight");
const nineBtn = document.getElementById("calc-nine");
const zeroBtn = document.getElementById("calc-zero");

const displayValElement = document.getElementById("total");
console.log("I hava",displayValElement)
const clearBtn = document.getElementById("clear")

let calcNumBtns = document.getElementsByClassName("btn-num"); 
console.log(calcNumBtns)

let updateDisplayVal = (clickObj) =>{ 
    let btnText = clickObj.target.innerHTML;
    if(displayVal == "0"){
        displayVal = '';
    }
    displayVal += btnText;
    displayValElement.value = displayVal;
}
let clearDisplayVal = (clickObj) =>{
    let btnText = clickObj.target.innerHTML;
    displayVal = 0;
    displayValElement.value = displayVal;
}
for(let i=0; i < 10; i++){ 
    calcNumBtns[i].addEventListener("click", updateDisplayVal, false)
}
clearBtn.addEventListener("click", clearDisplayVal, false)

let displayVal = "0"; 
let pendingVal = ""; //
let evalStringArray = []; 
