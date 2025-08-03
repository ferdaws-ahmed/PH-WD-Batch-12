


//Task-5 (Hard)
//Loop through an object and print the key-value pairs with their types


let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};


for (const obj in myObject){
    const kye = 'kye: ' + obj;
    const type = 'type: ' + typeof myObject[obj];
    const output = kye.concat(' | ') + type;
    
    console.log(output)

}





