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

// let chooseItems = document.querySelector('#choose');
// let totalPrice = document.querySelector('#total');

// let itemsPrice = [...chooseItems.querySelectorAll('.collect__item')];
// // console.log("itemsPrice :>> ", itemsPrice);

// itemsPrice.forEach((el) => {
//   // console.log("el :>> ", el);

//   el.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//     } else {
//       this.classList.add('active');
//     }

//     let activeItems = getActiveItems(chooseItems);
//     let sum = sumPrice(activeItems);
//     showTotalSum(sum, totalPrice);
//   });
// });

// function getActiveItems (chooseItems) {
//   return [...chooseItems.querySelectorAll('.collect__item.active')];
// }

// function sumPrice (items) {
//   let sum = 0;

//   for ( let i = 0; i < items.lenght; i++) {
//     sum += Number(items[i].innerHTML);
//   }

//   return sum;
// }

// function showTotalSum (sum, elem) {
//   elem.innerHTML = sum;
// }


const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

let itemsPrice = calc.querySelectorAll('.collect__item');

itemsPrice.forEach((el) => {
  el.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }
  });
});

calc.addEventListener('click', function (event) {
  if (!event.target.classList.contains('calc__btn')) return;

  // const value = this.getAttribute("data-value");

  const value = event.target.innerText;
  // const value = this.target.dataset;

  // switch(value) {
  //   case 'C':
  //     result.innerText = '';
  //     break;

  //   case '=':
  //     result.innerText = eval(result.innerText);
  //     break;

  //   default:
  //     result.innerText += value ;
  // }


  console.log(value);

  result.innerText = value;
});
