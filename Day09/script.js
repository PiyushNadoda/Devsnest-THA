var bookedSeats = document.querySelector('.booked-seats')
var reaminingSeats = document.querySelector('.reamining-seats')
var count = 0
window.onclick = e => {
    if(
        e.target.classList.contains('learn-more')
    ){
        if(e.target.classList.contains('booked')){
            e.target.classList.remove('booked')
            count--;
            bookedSeats.innerText = `Booked seats : ${count}`
            reaminingSeats.innerText = `Remaining seats : ${20 - count}`  
        }
        else{
            e.target.classList.add('booked')
            count++;
            bookedSeats.innerText = `Booked seats ${count}`
            reaminingSeats.innerText = `Remaining seats ${20 - count}`  
        }
    }
    }
   
