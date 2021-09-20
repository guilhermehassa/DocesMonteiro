var menuToggle = document.querySelector('#nav__toggle');
var ulMenu = document.querySelector('.header__ul');

menuToggle.addEventListener('click',function(event){
	
	if(ulMenu.className == 'header__ul header__ul-on'){
		ulMenu.classList.remove('header__ul-on');
	}else{
		ulMenu.classList.add('header__ul-on');
	}
	
  
	
});

ulMenu.addEventListener('click',function(event){
  if(ulMenu.className == 'header__ul header__ul-on'){
		ulMenu.classList.remove('header__ul-on');
	}
});
