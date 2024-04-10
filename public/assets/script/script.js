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
let imageOverlays = document.querySelectorAll('.image-overlay');

imageOverlays.forEach(function(imageOverlay, index) {
    imageOverlay.addEventListener('mouseover', function() {
        galleryImages[index].style.top = '-10px';
    });

    imageOverlay.addEventListener('mouseout', function() {
        galleryImages[index].style.top = '0px';
    });
});

/*||| MODAL WINDOWS FOR IMAGES ||| */

// Get the modal and image elements
let modal = document.getElementById("myModal");
let modalImage = document.getElementById("modalImage");

// Get all elements with the class "image-full"
let images = document.querySelectorAll(".image-full");

// Add click event listeners to each image
for (let i = 0; i < images.length; i++) {
	images[i].addEventListener("click", function (event) {
		modal.style.display = "flex";
		document.body.style.overflow = "hidden";
		modalImage.src = this.src;
	});
}

// Get the close button element
let span = document.querySelector('.close');

// Add click event listener to the close button
if (span) {
	span.addEventListener("click", function () {
		modal.style.display = "none";
		document.body.style.overflow = "auto";
	});
}

// Add click event listener to the window
window.addEventListener("click", function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.style.overflow = "auto";
	}
});



/* window.addEventListener('scroll', function() {
    let images = document.querySelectorAll('.gallery img');
    let triggerOffset = window.innerHeight * 0.9; // Например, 80% высоты экрана

    images.forEach(function(image) {
        let bounding = image.getBoundingClientRect();
        let imageBottom = bounding.top + bounding.height;

        if (bounding.top < triggerOffset && imageBottom >= 0) {
            image.classList.add('slide-in');
        }
    });
}); */



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



/* document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.lazy');
    lazyImages.forEach(function(image) {
        image.src = image.dataset.src;
    });
}); */