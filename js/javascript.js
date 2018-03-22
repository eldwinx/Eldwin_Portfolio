$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("noScroll").addClass("scroll");
	} else {
		$("header").removeClass("scroll").addClass("noScroll");
	}

});

$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});

	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});

//rolling Text
var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

//fade
$(function(){  // $(document).ready shorthand
  $('.img_box_full').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.flex_item_big').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object-150 ){

                $(this).animate({'opacity':'1'},1000);

            }

        });

    });

		/* Every time the window is scrolled ... */
		$(window).scroll( function(){

				/* Check the location of each desired element */
				$('.flex_item_small').each( function(i){

						var bottom_of_object = $(this).position().top + $(this).outerHeight();
						var bottom_of_window = $(window).scrollTop() + $(window).height();

						/* If the object is completely visible in the window, fade it it */
						if( bottom_of_window > bottom_of_object-150 ){

								$(this).animate({'opacity':'1'},1000);

						}

				});

		});

});


/*masonry*/
(function() {
  // Masonry grid setup
  $(".grid").masonry({
    itemSelector: ".grid__item",
    columnWidth: ".grid__sizer",
    gutter: 15,
    percentPosition: true
  });
})();
