// let mql;
// let slideIndex = [1, 1]
// let slideId = ['slide1', 'slide2']
// let dotId = ['dot1', 'dot2']

// let slider = document.querySelector('.slider'),
//   sliderList = slider.querySelector('.slider-list'),
//   sliderTrack = slider.querySelector('.slider-track'),
//   slides = slider.querySelectorAll('.slide'),
//   arrows = slider.querySelector('.slider-arrows'),
//   prev = arrows.children[0],
//   next = arrows.children[1],
//   slideWidth = slides[0].offsetWidth,
//   posInit = 0,
//   posX1 = 0,
//   posX2 = 0,
//   posFinal = 0,
//   posThreshold = slideWidth * .35,
//   trfRegExp = /[-0-9.]+(?=px)/,
//   slide = function() {
//     sliderTrack.style.transition = 'transform .5s';
//     sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

//     // делаем стрелку prev недоступной на первом слайде
//     // и доступной в остальных случаях
//     // делаем стрелку next недоступной на последнем слайде
//     // и доступной в остальных случаях
//     prev.classList.toggle('disabled', slideIndex === 0);
//     next.classList.toggle('disabled', slideIndex === --slides.length);