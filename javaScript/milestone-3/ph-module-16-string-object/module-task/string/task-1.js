
// ------------------ solution 1 ------------------


let str = 'i am a good boy. i am a web developer. i am from Bangladesh. i like play football.';


console.log(str.length);
const vagA = str.split('a');
const countVagA = str.length - vagA.length;
const countA = str.length - countVagA;
const finalCount = countA - 1;
console.log(finalCount)







// ------------------------solution 2 ---------------------




let containerA = [];
for( let newStr of str){
    
    if(newStr === 'a'){
        
        containerA.push(newStr);
        
    }
    
    
}
console.log(containerA.length)




