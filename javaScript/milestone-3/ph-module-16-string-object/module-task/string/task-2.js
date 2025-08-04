

// -------------------------- solution 1 ------------------------
const str = 'Amar sonar Bangla. Ami tomay valobasi.Chiro din tomar Akash, tomar Batas, amar prane bazay basi.';


console.log(str.length);
const vagA = str.toLowerCase().split('a');
const countVagA = str.length - vagA.length;
const countA = str.length - countVagA;
const finalCount = countA - 1;
console.log(finalCount)






// -------------------------- solution 2 ------------------------




let container = [];
for(let strElement of str){
    if(strElement.toLowerCase() === 'a'){
        container.push(strElement);
    }
}

console.log(container.length);