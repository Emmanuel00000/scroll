let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

const header = document.querySelector('.header');
const toggleLinks = document.querySelector('.headerLinks');
const icon = document.querySelector('.fa-bars');
const iconContainer = document.querySelector('.iconContainer');
icon.addEventListener('click', function () {
    iconContainer.classList.toggle('rotate');
    toggleLinks.classList.toggle('showLinks');
    header.classList.toggle('darken');
});

// resize checks all for window resizing events. look up how to throttle the events
// rect returns the size of an element and its position relative to the viewport
const body = document.querySelector('body');
window.addEventListener('resize', function () {
    if (body.getBoundingClientRect().width > 690) {
        iconContainer.classList.remove('rotate');
        toggleLinks.classList.remove('showLinks');
        header.classList.remove('darken');
    }
});

// pageYOffset is a read-only property that returns the number of pixels the doc has been scrolled vertically
const link = document.querySelectorAll('.link');
link.forEach(function (e) {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > header.getBoundingClientRect().height) {
            header.classList.add('changeNav');
            e.classList.add('changeLink');
        }
        else {
            header.classList.remove('changeNav');
            e.classList.remove('changeLink');
        }
        if (window.pageYOffset > 0) {
            iconContainer.classList.remove('rotate');
            toggleLinks.classList.remove('showLinks');
            header.classList.remove('darken');
        }
        const banner = document.querySelector('.banner');
        const arrowContainer = document.querySelector('.arrowUpContainer');
        if (window.pageYOffset > banner.getBoundingClientRect().height) {
            arrowContainer.classList.add('showArrow');
        }
        else {
            arrowContainer.classList.remove('showArrow');
        }
    });

    // offsetTop returns a number representing the top position of element in pixels
    // scrollTo scrolls to the specified position
    e.addEventListener('click', function (event) {
        event.preventDefault();
        toggleLinks.classList.remove('showLinks');
        iconContainer.classList.remove('rotate');
        header.classList.remove('darken');
        const id = event.currentTarget.getAttribute('href');
        const value = document.querySelector(id);
        const position = value.offsetTop;
        window.scrollTo ({
            left: 0,
            top: position - header.getBoundingClientRect().height,
        });
    });
});

const arrowContainer = document.querySelector('.arrowUpContainer');
arrowContainer.addEventListener('click', function () {
    window.scrollTo ({
        left: 0,
        top: 0,
    });
});


