// let reset = document.querySelector(".reset")
// let number = document.querySelector(".span2")
// let x1 = document.querySelector(".x1")
// let x2 = document.querySelector(".x2")
// let input = document.querySelector(".number")
// let submit = document.querySelector(".submit")

// // let randomNumber = Math.floor(Math.random() * 16);
// // console.log(randomNumber);

//     submit.addEventListener("click", function(){
//         let randomNumber1 = Math.floor(Math.random() * 16);
//         let randomNumber2 = Math.floor(Math.random() * 16);
//         x1.innerHTML = randomNumber1;
//         x2.innerHTML = randomNumber2;
//         number.textContent = randomNumber1 * randomNumber2;
//     })     
let reset = document.querySelector(".reset")
let number = document.querySelector(".span2")
let x1 = document.querySelector(".x1")
let x2 = document.querySelector(".x2")
let input = document.querySelector(".input")
let submit = document.querySelector(".submit")

let score = localStorage.getItem('score') || 0;
number.textContent = score;

let randomNumber1 = Math.floor(Math.random() * 16);
let randomNumber2 = Math.floor(Math.random() * 16);
let correctAnswer = randomNumber1 * randomNumber2;

x1.innerHTML = randomNumber1;
x2.innerHTML = randomNumber2;

submit.addEventListener("click", function(){
    let userAnswer = parseInt(input.value);
    if(userAnswer === correctAnswer){
        score++;
    } else {
        score--;
    }
    localStorage.setItem('score', score);
    number.textContent = score;
    randomNumber1 = Math.floor(Math.random() * 16);
    randomNumber2 = Math.floor(Math.random() * 16);
    correctAnswer = randomNumber1 * randomNumber2;
    x1.innerHTML = randomNumber1;
    x2.innerHTML = randomNumber2;
    input.value = '';
})

reset.addEventListener("click", function(){
    score = 0;
    localStorage.removeItem('score');
    number.textContent = score;
})
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        submit.click(); 
    }
});



