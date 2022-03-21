'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 50;

// 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; 

// score checker function
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if (!guess){
        document.querySelector('.message').textContent = '☠ No Number!!';  
    } 
    
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#4EF037';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
    }
    } else if(guess !== secretNumber){
        document.querySelector('.message').textContent = guess > secretNumber?'💚too High': '💚too Low';
        score--; 
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'Sorry !! You Lost🤯';
    } 
    // else if (guess > secretNumber){
       
    //     if (score > 1 ){ 
    //         score--; 
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = '💚too High';
    //     } 
    //     else{
    //         document.querySelector('.message').textContent = 'Sorry !! You Lost🤯';
    //     } 
    // } 
    // else if (guess < secretNumber){

    //     if (score > 1 ){
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = '💚too Low';
    //     } 
    //     else{
    //         document.querySelector('.message').textContent = 'Sorry !! You Lost🤯';
    //     }  
    // }
})


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})