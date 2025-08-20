


const btn = document.getElementById('my-btn');
const text = document.getElementById('display-text');
const hoverOver = document.getElementById('hover-over');
const hoverOut = document.getElementById('hover-over');
const doubleClick = document.getElementById('hover-over');
const myInput = document.getElementById('my-input');
const updateBtn = document.getElementById('update-btn');


btn.addEventListener('click',function(){
    text.innerText = 'this is clicked';
    
})

hoverOver.addEventListener('mouseover',function(){
    text.style.backgroundColor = 'coral';
})


hoverOut.addEventListener('mouseleave', function(){
    text.style.background = 'none'
})


doubleClick.addEventListener('dblclick',function(){
    text.style.backgroundColor = 'yellow'
})

myInput.addEventListener('input', function(){
    // console.log(myInput.value);
})


updateBtn.addEventListener('click', function(){
    text.innerText = myInput.value;
    myInput.value = '';
})



// add comment section ---------------------------->>







 

   
