

// for( let i = 1; i <= 100; i++){
//     let isSquare = false;

//     for(let j = 1;  j <= i; j++){
//         if( j * j === i){
//             isSquare = true;
//             break;
//         }
        
//     }
//     if(isSquare){
//          break;
//     }
//    console.log(i);
    
// }



for (let i = 1; i <= 100; i++) {
  let isSquare = false;

  for (let j = 1; j <= i; j++) {
    if (j * j === i) {
      isSquare = true;
      break;
    }
  }

  if (isSquare == true) {
    break; // stop when first perfect square is found
  }

  console.log(i);
}
