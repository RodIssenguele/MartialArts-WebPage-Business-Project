function mobileNavBtn(){

  const hamburgerBtn = document.querySelector('.js-hamburger-btn');

  const navContainer = document.querySelector('.js-nav-container');

  const main = document.querySelector('.main');
  const body = document.querySelector('.body');

  hamburgerBtn.addEventListener('click', ()=>{
     let toggled = navContainer.classList.contains('visible-mobile-nav-div');

    if(toggled){
      navContainer.classList.remove('visible-mobile-nav-div');
      navContainer.classList.add('mobile-nav-div-closing-animation');
       body.style.position = '';
       main.style.opacity = '1';
      return
      //console.log('2', navContainer.classList)
    } else{
      navContainer.classList.add('visible-mobile-nav-div');
      navContainer.classList.remove('mobile-nav-div');
      hamburgerBtn.ariaLabel = 'Menü schließen';
      navContainer.ariaExpanded = 'true'
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      main.style.opacity = '0';
       
     }
     //console.log('1', navContainer.classList)
     console.log('4')

  })


  
  navContainer.addEventListener('animationend', (e)=>{
    console.log('5')

    if(e.animationName === 'closingNav'){
      navContainer.classList.remove('mobile-nav-div-closing-animation');
      navContainer.classList.add('mobile-nav-div');
      hamburgerBtn.ariaLabel = 'Menü öffnen';
      navContainer.ariaExpanded = 'false';
      body.style.overflow = 'scroll';
    }
    console.log('6')
  })


}

mobileNavBtn();

const imgArray = [
  {
    id: '1',
    src: 'images/sifu-mit-messer.jpeg'},
  {
    id: '2',
    src: 'images/jungern-training-1.jpeg'},
  {
    id: '3',
    src: 'images/sifu-mit-jkd-training.jpeg'},
  {
    id:'4',
    src: 'images/winers-1.jpeg'
  }
];

function slideShow2(){

  const imgContainer = document.querySelector('.js-img-container');
  const nextbtn = document.querySelector('.js-next');
  const prevBtn = document.querySelector('.js-prev');
  const imgA = document.querySelector('.js-img-a');

  let count = 0;

  if(count === 0){
    imgA.src = imgArray[0].src;
  }

  nextbtn.addEventListener('click', ()=>{

    if(count > imgArray.length - 2){
      count = 0;
      imgA.src = imgArray[0].src;
      console.log('innnnnn',count)
      return
    } else{
      count += 1; 
      imgA.src = imgArray[count].src;
      console.log('in',count)
    }
    
    console.log('out',count) 
  })

  prevBtn.addEventListener('click', ()=>{

     
    
  })
}

slideShow2();

/*

function slideShow(){
  
  const imgContainer = document.querySelector('.js-img-container');
  const nextbtn = document.querySelector('.js-next');
  const prevBtn = document.querySelector('.js-prev');
  const imgA = document.querySelector('.js-img-a');
  const imgB = document.querySelector('.js-img-b');
  const imgC = document.querySelector('.js-img-c');

  
  nextbtn.addEventListener('click', ()=>{

    
    if(imgA.classList.contains('pic-v')){

      imgA.classList.remove('pic-v');
      imgB.classList.add('pic-v');
      console.log('1','a',imgA.classList,'b',imgB.classList);

    } else if(imgB.classList.contains('pic-v')){

      imgB.classList.remove('pic-v');
      imgC.classList.add('pic-v');
      console.log('2','b',imgB.classList,'c',imgC.classList);

    } else if(imgC.classList.contains('pic-v')){

      imgC.classList.remove('pic-v')
      imgA.classList.add('pic-v')
      console.log('3','c',imgC.classList,'a',imgA.classList);
    }

  })

  prevBtn.addEventListener('click', ()=>{

    
    if(imgC.classList.contains('pic-v')){

      imgC.classList.remove('pic-v');
      imgB.classList.add('pic-v');
      console.log('1','a',imgA.classList,'b',imgB.classList);

    } else if(imgB.classList.contains('pic-v')){

      imgB.classList.remove('pic-v');
      imgA.classList.add('pic-v');
      console.log('2','b',imgB.classList,'c',imgC.classList);

    } else if(imgA.classList.contains('pic-v')){

      imgA.classList.remove('pic-v')
      imgC.classList.add('pic-v')
      console.log('3','c',imgC.classList,'a',imgA.classList);
    }

  })
}

slideShow();

*/