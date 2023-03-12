let myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
let coor = [48.702679, 44.498048] // Офис дельта, Волгоград
let left_angle = [48.535966, 44.122424]
let right_angle = [48.949927, 45.150482]

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: coor, 
        zoom: 15.5,
        controls: []
    }, {
        restrictMapArea: [
            left_angle,
            right_angle,
        ]
    });
    myMap.geoObjects.add(new ymaps.Placemark(coor, {}, {
        preset: 'islands#governmentCircleIcon',
        iconColor: '#F2B91D'
    }));
}
let mql;
let slideIndex = [1, 1]
let slideId = ['slide1', 'slide2']
let dotId = ['dot1', 'dot2']

function classWork(mathch, arr, index) {
    let slideId = 'slide' + index;
    if (mathch) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.add(slideId);
            arr[i].classList.add('fade');
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove(slideId);
            arr[i].classList.remove('fade');
            arr[i].style.display = "block";
        }
    }

}

function media768() {
    mql = window.matchMedia('(max-width: 768px)');
    let slides1 = document.getElementsByClassName("what-we-do__services__item");
    let slides2 = document.getElementsByClassName("blog__cards__card")
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
    let slides = document.getElementsByClassName(slideId[index]);
    let dots = document.getElementsByClassName(dotId[index]);

    if (n > slides.length) { slideIndex[index] = 1 }
    if (n < 1) { slideIndex[index] = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[index]-1].style.display = "block";
    dots[slideIndex[index]-1].className += " active";
  }

window.addEventListener('resize', function(event) {
    media768();
    showSlides(slideIndex, 0);
    showSlides(slideIndex, 1);
}, true);

media768();
showSlides(slideIndex, 0);
showSlides(slideIndex, 1);
