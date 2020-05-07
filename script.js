function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');


	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu(){

		menu.toggleClass('burger-menu__active');

		if(menu.hasClass('burger-menu__active')){
			$('.nav_item_logo').css('color', 'white');
			$('body').css('overflow' ,' hidden');
			
		}
		else {
			$('body').css('overflow', 'visible');
			$('.nav_item_logo').css('color', '#656363');
		}
	}
}

burgerMenu('.burger-menu');

function slider(){
	let billboardImage = $('.header_billboard');
	let billboardItems = $('.billboard_items');
	console.log(billboardImage);

	billboardImage.on('click' , () =>{
		billboardImage.css({
			'background':'url("images/billboard_mobile.png") no-repeat center',
			'background-size':'100% 100%',
		 	});
		billboardItems.css('color', '#030803');
	})
}

slider();