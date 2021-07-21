const searchEl = document.querySelector('.search'); //7
const searchInputEl = searchEl.querySelector('input'); //7

searchEl.addEventListener('click', function(){ //7
  searchInputEl.focus(); //7
}); //7

searchInputEl.addEventListener('focus', function(){ //7
  searchEl.classList.add('focused'); //7
  searchInputEl.setAttribute('placeholder', '통합검색'); //7
}); //7

searchInputEl.addEventListener('blur', function(){ //7
  searchEl.classList.remove('focused'); //7
  searchInputEl.setAttribute('placeholder',''); //7
}); //7

const yearEl = document.querySelector('.copyright .this-year') //31
yearEl.textContent = new Date().getFullYear(); //31