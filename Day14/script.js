function buttonOneClicked(){
    let text = document.querySelector('.text');
    text.innerHTML = "button 1 pressed";
    setTimeout(() => {document.querySelector('.text').innerHTML = 'no activity'}, 1000);
}

function buttonTwoClicked(){
    let text = document.querySelector('.text');
    text.innerHTML = "button 2 pressed";
    setTimeout(() => {document.querySelector('.text').innerHTML = 'no activity'}, 1000);
}

function buttonThreeClicked(){
    let text = document.querySelector('.text');
    text.innerHTML = "button 3 pressed";
    setTimeout(() => {document.querySelector('.text').innerHTML = 'no activity'}, 1000);
}

function inputName(){
    let text = document.querySelector('.text');
    text.innerHTML = "At Name imput";
}

function inputEmail(){
    let text = document.querySelector('.text');
    text.innerHTML = "At email input";
}

function noActivity(){
    let text = document.querySelector('.text');
    text.innerHTML = "No activity";
}