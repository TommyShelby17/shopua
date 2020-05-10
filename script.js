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

$(document).ready(function() {
  
  var width = $('#slider-container').width();
  //dimensions
  $('.slides>li').width(width);
  $('.slides').width(width * $('.slides>li').length);

  
  //positioning
   $('.slides').css('left',-width);
   $('.slides>li:last-child').prependTo('.slides');
  
  //move slides forward
  function nextSlide() {
    $('.slides').animate({
      'margin-left':-width
    },500, function() {
      $('.slides>li:first-child').appendTo('.slides');
      $('.slides').css('margin-left', 0);
    });
  }
  //move slides backwards
  function prevSlide() {
    $('.slides').animate({
      'margin-left':width
    },500, function() {
      $('.slides>li:last-child').prependTo('.slides');
      $('.slides').css('margin-left', 0);
    });
  }
    
  //controls
  $('.next').click(nextSlide);
  $('.prev').click(prevSlide)
});