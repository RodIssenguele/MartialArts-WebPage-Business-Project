function mobileNavBtn(){

  const hamburgerBtn = document.querySelector('.js-hamburger-btn');

  const navContainer = document.querySelector('.js-nav-container');

  const main = document.querySelector('.main');
  const body = document.querySelector('.body');

  hamburgerBtn.addEventListener('click', ()=>{
     let toggled = navContainer.classList.contains('visible-mobile-nav-div');
    console.log('1')

    if(toggled){
      navContainer.classList.remove('visible-mobile-nav-div');
      navContainer.classList.add('mobile-nav-div-closing-animation');
      body.style.overflow = 'scroll';
       body.style.position = '';
       main.style.opacity = '1';
      console.log('2')
      return
      //console.log('2', navContainer.classList)
    } else{
      navContainer.classList.add('visible-mobile-nav-div');
      navContainer.classList.remove('mobile-nav-div');
      console.log('3')
     
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
    }
    console.log('6')
  })


}

mobileNavBtn();