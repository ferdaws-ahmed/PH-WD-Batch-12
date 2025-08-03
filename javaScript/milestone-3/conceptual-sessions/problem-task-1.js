


const  totalRows = 10;
let totalIncome  = 0;
let totalPremiumSeat = 0;
let totalNormalSeat = 0;

for( let i = 1; i <= totalRows; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log('Row-'+ i + ' : ' +  'Premium seat.');
        totalIncome = totalIncome + 800;
        totalPremiumSeat++
    }
    else{
        console.log('Row-'+ i + ' : ' +  'Normal seat.');
        totalIncome = totalIncome + 500;
        totalNormalSeat++;
    }
}
console.log('Total seat : ' + totalRows);
console.log('Total Normal seat : ' + totalNormalSeat);
console.log('Total Premium seat : ' + totalPremiumSeat);
console.log('Total income : ' + totalIncome);