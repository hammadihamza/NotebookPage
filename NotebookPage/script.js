let button = document.querySelector('button');
let cover = document.getElementById('Cover');

let preloader = document.getElementById('preloader');
setTimeout(function(){ preloader.style.display="none"; }, 4000);

button.addEventListener('click',()=>{
cover.style.display='none';
})

