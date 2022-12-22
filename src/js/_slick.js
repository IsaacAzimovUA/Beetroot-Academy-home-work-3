import $ from 'jquery';
import 'slick-carousel';

export function slicks() {

	//* ---------Slick Gallery----------

	$('.slick-gallery').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 1000,
		autoplaySpeed: 1000,
		autoplay: true,
	});

	//* ---------Fetch Gallery_______________
	//!--------------->Gallery filter________
	letIt('')
	function letIt(sex) {
		fetch('../data/product.json')
			.then((response) => response.json())
			.then((data) => { if(sex != ''){
				const key = "sex";
				const value = sex;
				const result = data.filter(d => d[key] == value);
				result.forEach(element => {
					addElementGallery(element);
				})
			} else {
				data.forEach(element => {
					addElementGallery(element);
				})
			}
				
			})

			function addElementGallery(element) {
				let galleryCard =
					`<div class="slick-gallery__item gallery_card" data-filter="${element.sex}">
				<img class="gallery_card__img" src="${element.img}" alt="Pair of shues">
				<h6 class="gallery_card__title">${element.name}</h6>
				<div>
				<p class="gallery_card__price">Price: $${element.price}</p>
				<button class="button" onclick="window.open(href='${element.link}', '_blank');">Buy now</button>
				</div>
			</div>`
	
				$(".slick-gallery").slick('slickAdd', galleryCard);
			}
	}

	$('.filter__item').first().addClass('filter__item--active');
	$('.filter__item').on('click', function () {
		let filtered = false;
		let selected = $(this).attr("data-filter");
		if (filtered === false) {
			$('.slick-gallery').slick('slickFilter', function () {
				return
			});
			letIt(selected);
			$('.filter__item').removeClass('filter__item--active');
			$(this).addClass('filter__item--active');
			filtered = true;
		} else {
			$(this).removeClass('filter__item--active');
			filtered = false;
		}
	});

	//*-------------Slick Feedback-----------

	$('.slick-feedback').slick({
		infinite: true,
		fade: true,
		speed: 1000,
		autoplaySpeed: 1000,
		autoplay: true,
	});

	//!-----------Feedback fetch-------------

	fetch('../data/testimonials.json')
		.then((response) => response.json())
		.then(data => data.forEach(element => {
			addElementFeedback(element);
		}));


	function addElementFeedback(element) {
		let feedbackCard =
			`<div class="slick-feedback__item feedback_card">
				<img src="${element.img}" alt="User's Picture" class="feedback_card__img">
				<h4 class="title title--4 feedback_card__title">${element.title}</h4>
				<p class="text feedback_card__text">${element.text}</p>
				<h4 class="title title--4 feedback_card__name">${element.name}</h4>
				<p class="text feedback_card__occupation">${element.occupation}</p>
			</div>`
		$(".slick-feedback").slick('slickAdd', feedbackCard);
	}
}
