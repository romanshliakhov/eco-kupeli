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


// Калькулятор выбранных товаров

// const calc = document.querySelector('.calc');
// let result = document.querySelector('#result');
// const itemsPrice = calc.querySelectorAll('.collect__item');


// function sum() {

// let value;

//   itemsPrice.forEach((el) => {
//     el.addEventListener('click', function () {
//       if (this.classList.contains('active')) {
//         this.classList.remove('active');
//       } else {
//         this.classList.add('active');

//         value = +this.dataset.value;
//       }
//     });
//   });
//   return value;

// }

// let www = sum();

// console.log(www);

// // result.innerText = www;

// var 2

// const calc = document.querySelector('.calc');
// const fullPrice = document.querySelector('#result');
// let itemsPrice = calc.querySelectorAll('.collect__item');
// let price = 0;

// itemsPrice.forEach((el) => {
//   el.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//     } else {
//       this.classList.add('active');
//     }
//   });
// });


// calc.addEventListener('click', function (event) {
//   const value = +event.target.dataset.value;

//   console.log(event.target);
//   // console.log(value);

//   fullPrice.innerText = value;
// });


const calc = document.querySelector('.calc');
const fullPrice = document.querySelector('#result');
let itemsPrice = calc.querySelectorAll('.collect__item');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	// return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  return String(str);
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} ₽`;
};



itemsPrice.forEach((el) => {
  el.closest('.collect__item').setAttribute('data-id', randomId);
  el.addEventListener('click', function (e) {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }

    let self = e.currentTarget;
    let parent = self.closest('.collect__item');
    // let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.collect__item-price').textContent));
    let priceNumber = parseInt(parent.querySelector('.collect__item-price').textContent);
    console.log(priceNumber);

    plusFullPrice(priceNumber);

		printFullPrice();
  });
});





