


const mySelf = 'i am a good boy.';

//empty split ---> output only a array.
console.log(mySelf.split());



// empty string ---> output, every letter separately.
console.log(mySelf.split(''));



// space into a string ----> output every word separately.
console.log(mySelf.split(' '));


// use a ","           -----> output  every word convert a freedom element by using every comma.
const friendStr = 'Abul, Kabul, Sabul, Babul, Tabul';
console.log(friendStr)

console.log(friendStr.split(','));


//separate every word automatically  using comma.
console.log(friendStr.split(' '));


// division by anything   ------->     kabul
//                                    -------  ===  ka ; 
//                                      bul            


console.log(friendStr.split('bul')); 