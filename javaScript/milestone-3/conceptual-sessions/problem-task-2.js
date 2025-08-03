


const details = 'This product made by soft New Arrival ';

if(details.toLowerCase().includes('cotton')){
       console.log('Material: Cotton');
}
else if(details.toLowerCase().includes('sale')){
       console.log('Category: Sale Item');
}
else if(details.toLowerCase().includes('new arrival')){
       console.log('Status: New Arrival');
}
else if(details.toLowerCase().includes('limited edition')){
       console.log('Availability: Limited');
}
else{
    console.log('Tag : General')
}