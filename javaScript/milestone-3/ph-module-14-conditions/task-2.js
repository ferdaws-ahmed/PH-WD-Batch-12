

const BMI = 128;

if ( BMI < 18.5){
    console.log('You are underweight.');
}
else if( BMI > 18.5){
    if(BMI <= 24.9){
        console.log('You are normal.');
    }

    else if(BMI >= 25){
    if(BMI <= 29.9){
        console.log('You are overweight.');
    }
    else{
    console.log('You are obese.');
}
}
}

