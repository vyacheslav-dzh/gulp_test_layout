"use strict";

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
var coor = [48.702679, 44.498048]; // Офис дельта, Волгоград
var left_angle = [48.535966, 44.122424];
var right_angle = [48.949927, 45.150482];
function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: coor,
    zoom: 15.5,
    controls: []
  }, {
    restrictMapArea: [left_angle, right_angle]
  });
  myMap.geoObjects.add(new ymaps.Placemark(coor, {}, {
    preset: 'islands#governmentCircleIcon',
    iconColor: '#F2B91D'
  }));
}
var mql;
var slideIndex = [1, 1];
var slideId = ['slide1', 'slide2'];
var dotId = ['dot1', 'dot2'];
function classWork(mathch, arr, index) {
  var slideId = 'slide' + index;
  if (mathch) {
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.add(slideId);
      arr[i].classList.add('fade');
    }
  } else {
    for (var _i = 0; _i < arr.length; _i++) {
      arr[_i].classList.remove(slideId);
      arr[_i].classList.remove('fade');
      arr[_i].style.display = "block";
    }
  }
}
function media768() {
  mql = window.matchMedia('(max-width: 768px)');
  var slides1 = document.getElementsByClassName("what-we-do__services__item");
  var slides2 = document.getElementsByClassName("blog__cards__card");
  classWork(mql.matches, slides1, 1);
  classWork(mql.matches, slides2, 2);
}

// Next/previous controls
function nextSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n, index) {
  showSlides(slideIndex[index] = n, index);
}
function showSlides(n, index) {
  var slides = document.getElementsByClassName(slideId[index]);
  var dots = document.getElementsByClassName(dotId[index]);
  if (n > slides.length) {
    slideIndex[index] = 1;
  }
  if (n < 1) {
    slideIndex[index] = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var _i2 = 0; _i2 < dots.length; _i2++) {
    dots[_i2].className = dots[_i2].className.replace(" active", "");
  }
  slides[slideIndex[index] - 1].style.display = "block";
  dots[slideIndex[index] - 1].className += " active";
}
window.addEventListener('resize', function (event) {
  media768();
  showSlides(slideIndex, 0);
  showSlides(slideIndex, 1);
}, true);
media768();
showSlides(slideIndex, 0);
showSlides(slideIndex, 1);