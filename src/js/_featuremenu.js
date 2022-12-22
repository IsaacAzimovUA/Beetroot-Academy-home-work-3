//Feature
import $ from 'jquery';

export function featureMenu(){
	$('.feature__link').on('click', function (e) {
		e.preventDefault();
		$(this).siblings('.feature__text').toggleClass('feature__text--shown');
		$(this).siblings('.feature__img').toggleClass('feature__img--shown');
		$(this).parent('.feature__item').toggleClass('feature__item--shown');
	
		$(this).text($(this).text() == 'Read less' ? 'Read more' : 'Read less');
	})
}