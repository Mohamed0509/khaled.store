
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  
}

document.querySelector('#all').onclick = () =>{
  navbar.classList.remove('active');
}