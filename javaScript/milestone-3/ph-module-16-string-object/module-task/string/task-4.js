




const str = 'This is X boy. this x is very clever.';
let newArr = [];

for( let strElement of str){
    
    if( strElement.toLowerCase() === 'x' ){
        strElement = 'y';
        
    }
    newArr.push(strElement) ;
   
}
 let newStr = newArr.join('');
 console.log( newStr);