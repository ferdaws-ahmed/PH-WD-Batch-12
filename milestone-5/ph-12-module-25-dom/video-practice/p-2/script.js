

const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  const commentBox = document.getElementById('comment-box');
  const commentValue = commentBox.value ;
  
  const newElement = document.createElement('p');
  newElement.innerText = commentValue;

  const commentContainer = document.getElementById('comment-container');
  commentContainer.appendChild(newElement);

  newElement.classList.add('comment-style');
  commentBox.value = '';
})