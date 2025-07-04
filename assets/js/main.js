"use strict";
/* бургер меню */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open")
  })
})

document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
        // Находим  .accordion__item и переключаем класс
        const item = header.closest('.accordion__item');
        if (item) {
            item.classList.toggle('accordion__item_show');
        }
    });
});

/* модальное окно */
/* регистрация */
var regModal = document.getElementById("regModal");
var regBtn = document.getElementById("regBtn");
var closeReg = document.getElementsByClassName("close_reg")[0];

var avtoModal = document.getElementById("avtoModal");
var avtoBtn = document.getElementById("avtoBtn");
var closeAvto = document.getElementsByClassName("close_avto")[0];

avtoBtn.onclick = function () {
  document.body.append(avtoModal);
  avtoModal.style.display = "block";
}
closeAvto.onclick = function () {
  avtoModal.style.display = "none";
}

regBtn.onclick = function () {
  regModal.style.display = "block";
}
closeReg.onclick = function () {
  regModal.style.display = "none";
}


/* слайдер */
let currentIndex = 0; // Индекс текущего изображения
const images = [
    'assets/images/catalog/bot.jpg',
    'assets/images/catalog/frak.jpg',
    'assets/images/catalog/perch1.jpg',
    'assets/images/catalog/frak2.jpg' // Добавьте пути к другим изображениям
];

function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    currentIndex = Array.from(document.querySelectorAll('.thumbnail')).indexOf(element);
    mainImage.src = element.src; // Меняем источник основного изображения
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
    updateMainImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущему изображению
    updateMainImage();
}

function updateMainImage() {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[currentIndex]; // Обновляем источник основного изображения
}
// Инициализируем слайдер с первым изображением
updateMainImage();
//для увеличенного окна
function nextImage2() {
  currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
  updateMainImage2();
}

function prevImage2() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущему изображению
  updateMainImage2();
}
function updateMainImage2() {
  const enlargedImage = document.getElementById('enlargedImage');
  enlargedImage.src = images[currentIndex]; // Обновляем источник основного изображения
}


// Функция для увеличения изображения
function enlargeImage(img) {
  const overlayslider = document.getElementById('overlay-slider');
  const enlargedImage = document.getElementById('enlargedImage');

  enlargedImage.src = img.src; // Устанавливаем источник увеличенного изображения
   enlargedImage.src = images[currentIndex]; // Обновляем источник основного изображения
  overlayslider.style.display = 'flex'; // Показываем оверлей
 
}

// Функция для закрытия оверлея
function closeOverlay() {
  const overlayslider = document.getElementById('overlay-slider');
  overlayslider.style.display = 'none'; // Скрываем оверлей
}

