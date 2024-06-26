"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menuArrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menuIcon');
const menuBody = document.querySelector('.menuBody');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menuLink');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink && document.querySelector(menuLink)) {
            const gotoBlock = document.querySelector(menuLink);

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            gotoBlock.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            e.preventDefault();
        }
    }
}

$(document).ready(function() {
	
	$('.card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});

// LOADER
let mask = document.querySelector(".mask");
let text = document.querySelector(".text");

window.addEventListener("load", () => {
    // Показываем маску
    mask.style.opacity = "1";

    setTimeout(() => {
        // Показываем текст через 2 секунды после появления маски
        text.style.opacity = "1";
        
        setTimeout(() => {
            // Плавно исчезаем текст через 3 секунды
            text.style.opacity = "0";
            
            setTimeout(() => {
                // Плавно исчезаем маску через 1 секунду после исчезновения текста
                mask.style.transition = "opacity 1s";
                mask.style.opacity = "0";
                
                setTimeout(() => {
                    // Удаляем маску после исчезновения
                    mask.remove();
                }, 3000); // Задержка в 1 секунду после исчезновения маски
            }, 3000); // Задержка в 3 секунды перед исчезновением текста
        }, 3000); // Задержка в 2 секунды перед появлением текста
    }, 1000); // Задержка в 2 секунды перед появлением текста
});

// GALERY - image movement when hover

let galleryImages = document.querySelectorAll('.image-container');

galleryImages.forEach(function(imageContainer, index) {
    imageContainer.addEventListener('mouseover', function() {
        galleryImages[index].style.top = '-10px';
    });

    imageContainer.addEventListener('mouseout', function() {
        galleryImages[index].style.top = '0px';
    });
});

/*||| MODAL WINDOWS FOR IMAGES ||| */




// Получаем все изображения с классом "lazy"
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.lazy');

    function lazyLoad() {
        lazyImages.forEach(function(image) {
            if (isElementInViewport(image) && !image.classList.contains('loaded')) {
                image.src = image.dataset.src;
                image.onload = function() {
                    image.parentElement.classList.add('loaded');
                }
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    lazyLoad(); // Загрузка изображений, которые видны сразу при загрузке страницы
});