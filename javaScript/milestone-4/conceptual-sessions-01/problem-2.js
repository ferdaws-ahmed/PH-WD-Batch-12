


function matchFinder(string1, string2) {
    // const vag = string1.split('')
    // return vag;
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}

const result = matchFinder('John Doe', 'ohn');
const result1 = matchFinder('JavaScript, Code');
const result2 = matchFinder('Peter Parker', 'Pen');
const result3 = matchFinder('Peter Parker','Pet');
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
