

const array = [9, -7];
// function sortMaker(arr) {
        
//         if(arr[0] < 0 || arr[1] < 0){
//             return 'Invalid Input'
//         }
//         else if(arr[0] !== arr[1]){
//             const sort = arr.sort();
//             return sort;
//         }
//         else if( arr[0] === arr[1]){
//             return 'equal'
//         }
        
        
// }




function sortMaker(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return 'Invalid Input';
        }
        else if(arr[0] !== arr[1]){
            const sort = arr.sort();
            return sort;
        }
        
    }
}
const result = sortMaker(array);
console.log(result);