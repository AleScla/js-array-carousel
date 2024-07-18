console.log('js collegato');

let myImg = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
]
console.log(myImg);

const container = document.querySelector('.container');

for(let i = 0; i < myImg.length; i++){
    container.innerHTML += `
<div class="img-container">
   <img src="${myImg[i]}">
</div>
`   
}

const imgContainer = document.getElementsByClassName('img-container');
console.log(imgContainer);

let active = 0;

if(myImg[active]){
    imgContainer[active].classList.add('active');
}

const btn = document.querySelector('.down');
btn.addEventListener('click', function(){
    if(active < myImg.length - 1){
        imgContainer[active].classList.remove('active');

        active++;

        imgContainer[active].classList.add('active');
    }  
    else if (active == myImg.length - 1){

        imgContainer[active].classList.remove('active');

        active = 0;

        imgContainer[active].classList.add('active'); 
    }  
    }
)

const btntop = document.querySelector('.top');
btntop.addEventListener('click', function(){
    if(active > 0){
        imgContainer[active].classList.remove('active');

        active--;

        imgContainer[active].classList.add('active');
    }  
    else if (active == 0){

        imgContainer[active].classList.remove('active');

        active = myImg.length - 1;

        imgContainer[active].classList.add('active'); 
    }  
});

    






    



