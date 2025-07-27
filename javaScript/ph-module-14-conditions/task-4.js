

const myMark = 85;
const friendMark = 60;


if(myMark > 80 && myMark <= 100){
    if(friendMark >= 80 && friendMark <= 100){
        console.log('go for a lunch.');
    }
    else if( friendMark < 80 && friendMark >= 60){
        console.log('Hey friend, good luck next time.');
    }
    else if ( friendMark < 60 && friendMark >= 40){
        console.log('tui kom mark paiso. tor message seen kora jabe na.');
    }
    else if( friendMark < 40 && friendMark >= 0){
        console.log('tore ami chini na. block khaaa...');
    }
    else{
        console.log('its is out of mark limit.')
    }
    

}
else {
    if( myMark <= 100){
        console.log('go to home and act like very sad.');
    }
    else{
        console.log('its is out of mark limit.')
    }
}