function mobileNavBtn(){

  const hamburgerBtn = document.querySelector('.js-hamburger-btn');

  const navContainer = document.querySelector('.js-nav-container');

  const main = document.querySelector('.main');
  const body = document.querySelector('.body');

  hamburgerBtn.addEventListener('click', ()=>{

    navContainer.classList.toggle('mobile-nav-div');

    navContainer.classList.toggle('visible-mobile-nav-div');

   let toggled = navContainer.classList.contains('visible-mobile-nav-div');

    if(toggled){
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      main.style.opacity = '0';
    } else {
      body.style.overflow = 'scroll';
      body.style.position = '';
      main.style.opacity = '1';
    }

    console.log(body.style.height, body.style.overflow)


  })

  
  console.log(hamburgerBtn)
}

mobileNavBtn();