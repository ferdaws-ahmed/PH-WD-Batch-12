


const str = 'this is a good paper.';
 let newWord = [];
let vag = str.split(' ');
for( let word of vag){

    word = word[0].toUpperCase() + word.slice(1) ;
    newWord.push(word);
    
}

console.log(newWord.join(' '))
