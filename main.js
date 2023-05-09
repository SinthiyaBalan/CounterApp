// let a = document.getElementById('title');

// a.textContent = "I am writing from js"

// const primeColor = "#123456"

// a.style.color = primeColor;

// a.style.backgroundColor = 'yellow';
// a.style.border = '2px green solid'

// let title = document.getElementById('title');
// let color1 = prompt("Which color you would like to see the Heading:")


// title.style.color = color1;


// let para = document.getElementById('para');
// let color2 = prompt("Which color you would like to see the Paragraph:")


// para.style.color = color2;



// let btn = document.getElementById('btn')

// btn.style.color = 'white';

// btn.style.backgroundColor = 'green';

// btn.style.fontSize = "30px";

// let para = document.getElementById('para');

// body.removeChild(para);

// let n = prompt("How many paragraph do you need to add?")

// for( i=0 ; i< Number(n); i++){

//     const p = document.createElement("p");
//     p.textContent = `I am paragraph of n ${i}`;

//     body.appendChild(p);
// }



 
// function addP(){

//   const p= document.createElement('p')
//   p.textContent = "I am created by click event";
//   document.body.appendChild(p)
// }

// btn.addEventListener ('click',addP)


/* const amount = document.getElementById("amount");

let currentNumber= 0;
amount.textContent = currentNumber;

let btn = document.getElementById('btn');

const body = document.body;

function addP() {

    currentNumber = currentNumber + 1;
    amount.textContent = currentNumber ;
    console.log(amount.textContent)
    
}
btn.addEventListener ('click',addP) */




/* function changeColor(){

    body.style.color = "white";
    body.style.backgroundColor = "black";
    btn.style.color = "white";
    link.style.color = "white";
    btn.style.backgroundColor = "green";

}
btn.addEventListener ('click',changeColor)  */


/* body.classList.add("dark")
btn.addEventListener ('click',changeColor) 

function changeColor() {
    

if(body.classList.contains('dark')){
    body.classList.remove('dark')
}

else{
    body.classList.add('dark')
}

} */






/* if(para.classList.contains('invisible')){
    console.log("I am not adding in, since it already exist");
}

else{
    para.classList.add('invisible');
    console.log("I am adding in, since it not exist");
} */


// let disappearbtn = document.getElementById('disappear');

/* 
function addP (){
    para.classList.remove('invisible')
}

function removeP (){
    para.classList.add('invisible')
}

appearbtn.addEventListener ('click',addP);
disappearbtn.addEventListener ('click',removeP); */

/* let para = document.getElementById('para');
let btn = document.getElementById('appear');

function addP() {
     para.classList.toggle('invisible');
    
    // if(para.classList.contains('invisible'))
    if(btn.textContent == "Appear"){
        console.log(btn.textContent)
        btn.textContent = "Disapper"
    }
    else{
        btn.textContent = "Appear"
    }
    
}

btn.addEventListener('click',addP); */


const fvalue = document.getElementById("Fvalue");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const minus = document.getElementById("minus");

let initValue = 0;
let sum = 0;

fvalue.textContent = initValue;
function plusNumber() {
    sum = Number(fvalue.textContent);
    sum = sum + 1;
    console.log(sum)
    fvalue.textContent = sum ;

}

function minusNumber(){
    sum = Number(fvalue.textContent);
    sum = sum - 1;
    console.log(sum)
    fvalue.textContent = sum ;
    
}

function resetNumber(){
    initValue = 0;
    fvalue.textContent = initValue;
}

plus.addEventListener('click',plusNumber);
reset.addEventListener('click',resetNumber);
minus.addEventListener('click',minusNumber);

