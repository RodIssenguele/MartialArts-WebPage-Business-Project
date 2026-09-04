function mobileNavBtn(){

  const hamburgerBtn = document.querySelector('.js-hamburger-btn');

  const navContainer = document.querySelector('.js-nav-container');

  hamburgerBtn.addEventListener('click', ()=>{

    navContainer.classList.toggle('mobile-nav-div');

    navContainer.classList.toggle('visible-mobile-nav-div');

    let toggled = navContainer.classList.contains('visible-mobile-nav-div');



  })

  
  console.log(hamburgerBtn)
}

mobileNavBtn();