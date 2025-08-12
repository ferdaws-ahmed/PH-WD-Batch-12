


function cubeNumber(numbers) {
    const cube = numbers ** 3;
    if(typeof numbers === 'number'){
        return cube;
    }
    
    else{
        return 'its not a number.'
    }
}

const result = cubeNumber(4)
console.log(result);