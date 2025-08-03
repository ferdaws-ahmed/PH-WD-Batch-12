

let reverse = '';

const myself = 'i am e polite boy.';
for (let letter of myself){
    reverse = letter + reverse;
    
}
console.log(reverse);



// way-2    ------------------------------->

const oiKire = ' oi kire oi kire....  modhu modhu';
let rev = '';

for( let i = 0; i < oiKire.length; i ++){
    const letter = oiKire[i];
    rev = letter + rev;
}
console.log(rev);



const addr = 'andorkilla bandorbon';
const revv = addr.split('').reverse().join('');
console.log(revv);