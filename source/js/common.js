// tabs
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow--prev')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tabs__btn')
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
					prevActive.classList.add('tabs__btn--active');

					let path = prevActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}

			if (e.target.classList.contains('tabs__arrow--next')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let nextParent = activeParent.nextElementSibling;

				if (nextParent) {
					let nextActive = nextParent.querySelector('.tabs__btn');
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
					nextActive.classList.add('tabs__btn--active');

					let path = nextActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};
});

// portfolio slider
let swiperPortfolio = new Swiper('.portfolio__slider', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 1,
    }
  }
});

// let swiperReadyDots = ['серия стандарт', 'серия премиум', 'серия люкс'];

// let swiperReady = new Swiper('.ready__slider', {
//   slidesPerView: '1',
//   loop: true,
//   touchRatio: 0,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
//   pagination: {
//     el: '.ready__slider-nav',
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (swiperReadyDots[index]) + '</span>';
//     },
//   },
// });

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


// Калькулятор выбранных товаров
const calc = document.querySelector('.calc');
const fullPrice = document.querySelector('#result');
const cancelFullPrice = document.querySelector('#reset');
let itemsPrice = calc.querySelectorAll('.collect__item');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const resetPrice = () => price = 0;

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} ₽`;
};

itemsPrice.forEach((el) => {
  el.closest('.collect__item').setAttribute('data-id', randomId);


  el.addEventListener('click', function (e) {
    let self = e.currentTarget;
    let parent = self.closest('.collect__item');
    let rawPrice = parent.querySelector('.collect__item-price').textContent;

    let priceNumber = parseInt(rawPrice.match(/\d*/gi).join(''), 10);

    if (parent.classList.contains('active')) {
      parent.classList.remove('active');

      minusFullPrice(priceNumber);
      printFullPrice();
    } else {
      parent.classList.add('active');

      plusFullPrice(priceNumber);
      printFullPrice();
    }
  });
});

cancelFullPrice.addEventListener('click', function(e) {
  itemsPrice.forEach((el) => {
    el.classList.remove("active");
  });

  resetPrice();
  printFullPrice();
});


//
const allRadio = document.querySelectorAll('.ready__info');

allRadio.forEach(radio => {
  radio.addEventListener('change', function (e) {
    const activeColVal = document.querySelector('.ready__radio-color:checked').value,
          activeMatVal = document.querySelector('.ready__radio-color:checked').value,
          photo = document.querySelector('.ready__item-image');
    if (activeColVal == 'blue-standart' && activeMatVal == 'palisandr-standart') {
      photo.scr = 'img/products/blue-granit.png';
    }
  });
});
