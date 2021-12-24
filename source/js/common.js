let swiperPortfolio = new Swiper('.portfolio__slider', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
});

let swiperReadyDots = ['серия стандарт', 'серия премиум', 'серия люкс'];

let swiperReady = new Swiper('.ready__slider', {
  slidesPerView: '1',
  loop: true,
  touchRatio: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.ready__slider-nav',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (swiperReadyDots[index]) + '</span>';
    },
  },
});



// imput Mask
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+9 (999) 999-99-99');
im.mask(selector);

// input validate
let selector2 = document.querySelector('input[type="tel"]');

let validateForms = function(selector, rules, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			};

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
		}
	});
};

validateForms('.form', { tel: {required: true} }, '.thanks-popup', 'send goal');
