

const age = 15;
const ticket = 800;

if(age < 10 && age >= 0){
    console.log('You are a children. Your ticket is free.');
}
else if(age >= 10 && age < 25){
     let discount = (ticket * 50) / 100;
     let ticketPrice = ticket - discount;
    console.log('You are a student. You got 50% discount. Your ticket price is = ' + ticketPrice + ' taka.' );
}
else if( age >= 60){
    let discount = (ticket * 15) / 100;
    let ticketPrice = ticket - discount;
    console.log('You are a senior citizen.YOu got 15% discount. Your ticket peice is = ' + ticketPrice + ' taka.');
}
else{
    console.log('Your ticket price is ' + ticket + ' taka.');
}