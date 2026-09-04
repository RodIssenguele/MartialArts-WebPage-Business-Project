function mobileNavBtn(){

  const hamburgerBtn = document.querySelector('.js-hamburger-btn');

  const navContainer = document.querySelector('.js-nav-container');

  const body = document.querySelector('.body');

  hamburgerBtn.addEventListener('click', ()=>{

    navContainer.classList.toggle('mobile-nav-div');

    navContainer.classList.toggle('visible-mobile-nav-div');

    let toggled = navContainer.classList.contains('visible-mobile-nav-div');

    if(toggled){
    body.style.height = '100%';
    body.style.overflow = 'hidden';
    } else {
      body.style.height = 'fit-content';
      body.style.overflow = '';
    }

    console.log(body.style.height, body.style.overflow)


  })

  
  console.log(hamburgerBtn)
}

mobileNavBtn();