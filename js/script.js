new Swiper('.history__swiper-container', {
	// Стрелки
	navigation: {
		nextEl: '.history__swiper .swiper-button-next',
		prevEl: '.history__swiper .swiper-button-prev',
	},

	pagination: {
		el: '.history__swiper .swiper-pagination',
		// Буллеты
		clickable: true,
	},
	// Включение/отключение свайпа на пк
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,
		// Включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить/выключить
		// управление клавишами
		// pageUP, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью
		eventsTarget: '.history__swiper'
	},

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отступ между слайдами
	spaceBetween: 30,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Бесконечный слайдер
	loop: true,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокруткой
		delay: 5000, //ms
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Включить\отключить после ручного переключения
		disableOnInteraction: false,
	},

	// Скорость смены слайдов
	speed: 800,

	// Эффекты переключения слайдов:
	// / Листание
	effect: 'slide',

	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1.2,
			spaceBetween: 10,
		},
		991: {
			slidesPerView: 1.8,
			spaceBetween: 20,
		},
		1100: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},


});
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.nav-menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 20;


			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			}),
				e.preventDefault();
		}
	}
};




function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

let schemeItems = document.querySelectorAll('.scheme-item');
let schemePath = document.querySelectorAll('.map-area[data-id]');

for (item of schemeItems) {
	item.addEventListener('click', function () {
		let idu = this.dataset.id;

		for (i of schemePath) {
			if (i.dataset.id == idu || i.dataset.id == idu + ', 6' || i.dataset.id == '5, ' + idu) {
				if (this.classList.contains('_active')) {
					this.classList.remove('_active');
					i.classList.remove('_active')
				} else {
					for (el of schemeItems) {
						el.classList.remove('_active');
					}
					for (ele of schemePath) {
						ele.classList.remove('_active')
					}
					this.classList.add('_active');
					i.classList.add('_active')
				}
			}
		}
	})
};

$('.scheme-item').hover(
	function () {
		$('.scheme path[data-id-one=' + $(this).data('id') + ']').attr('id', 'hover');
	},
	function () {
		$('.scheme path[data-id-one=' + $(this).data('id') + ']').attr('id', '');
	},
);
$('.scheme-item').hover(
	function () {
		$('.scheme path[data-id-two=' + $(this).data('id') + ']').attr('id', 'hover');
	},
	function () {
		$('.scheme path[data-id-two=' + $(this).data('id') + ']').attr('id', '');
	},
);
$('.scheme-item').hover(
	function () {
		$('.scheme path[data-id=' + $(this).data('id') + ']').attr('id', 'hover');
	},
	function () {
		$('.scheme path[data-id=' + $(this).data('id') + ']').attr('id', '');
	},
);


