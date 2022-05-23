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

$('.scheme-item').hover(function () {
	$('.scheme-popup').hide();
	$(this).addClass('_active');

	var popup = $(this).find('.scheme-popup');
	$(popup).css('top', '-' + ($(popup).outerHeight(true) + 15) + 'px');
	$(popup).css('left', '-' + (($(popup).outerWidth(true) / 6.5) - ($(this).outerWidth(true) / 2)) + 'px');
	$('.scheme path[data-id=' + $(this).data('id') + ']').attr('class', 'active');
	$(popup).show();
});

$('.scheme path').hover(function () {
	$('.scheme-popup').hide();
	$('.scheme-item[data-id=' + $(this).data('id') + ']').trigger('click');
});

$(".scheme").hover(function (e) {
	if ($(e.target).closest(".scheme path, .scheme-item").length == 0) {
		$(".scheme-popup").hide();
		$('.scheme path').removeClass('active');
		$('.scheme-item').removeClass('_active');
	}
});
