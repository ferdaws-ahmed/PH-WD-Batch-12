

function getElement(id){
    const elements = document.getElementById(id);
    return elements;
}

function clickBtn(id){
    const btns =  document.getElementById(id);
    btns.addEventListener('click',function(event){
        event.preventDefault();
        
        const btnParent = btns.parentNode;


        const cardImg = btnParent.getElementsByTagName('img')[0];
        const cardHeading = btnParent.getElementsByTagName('h1')[0];
        const cardPrice = btnParent.getElementsByTagName('p')[0];


        const newDiv = document.createElement("div");
        newDiv.innerHTML =`
         <div id="items">
               <div id="cart-item" class="flex justify-between items-center m-3 p-4 rounded-xl bg-slate-100">
                    <div class="w-8 " >
                        <img class="w-full" src="${cardImg.src}" alt="">
                    </div>
                    
                    <div>
                        <h1 class="font-bold">${cardHeading.innerText}</h1>
                        <p class="text-sm">${cardPrice.innerText}</p>
                    </div>
                </div>
         </div>
        `
        const cartSection = getElement('cart-section');
        cartSection.appendChild(newDiv)


        
        

        

        // const cartSection = getElement('cart-section');
        // const newDiv = document.createElement('p');
        // newDiv.innerText = 'this is new'
        // cartSection.appendChild(newDiv);



        

        // const btnParent = btns.parentNode ;
        // const title = btnParent.getElementsByClassName('card-title')[0];

        // const newElement = document.createElement('p');
        // newElement.innerText = title.innerText;

        // const cartSection = getElement('cart-section');
        // cartSection.appendChild(newElement);
    });
    const deleteBtn = getElement('Delete-all-btn');
        deleteBtn.addEventListener('click',function(){
            const Items = getElement('items');
            Items.innerHTML = '';
        })
    
}
 clickBtn('card-btn-1')
 clickBtn('card-btn-2')
 clickBtn('card-btn-3')