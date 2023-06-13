const images = document.querySelectorAll('img');


const options = {
   // Это тот элемент относительно которого осуществляется отслеживание, если отслеживаем относительно viewport'а можно ничего не указывать, если относительно какого-то div / class / id, то его указываем 
   root: null,
   // Если внешний элемент имеет какие-то отступы и вы хотите их учесть.
   rootMargin: '0px',
   // Порог срабатывания
   threshold: 0.1
}

// Функция обработчик события
// Создан экземпляр IntersectionObserver в качестве параметра функция handleImg которая берет картинки при изменении положения страницы и у элемента (картинок) появляется свойство IntersectionRatio которое показывает насколько элемент пересек зону видимости.
function handleImg( myImg, observer){
   myImg.forEach( myImgSingle => {
      console.log(myImgSingle.intersectionRatio);
      if (myImgSingle.intersectionRatio > 0) {
         loadImage(myImgSingle.target);
      }
   })
}

// Присвоение в img к src атрибута data
function loadImage(image) {
   image.src = image.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);

// На каждый объект "картинка" повешан observe - следит, зашла ли картинка в видимую область
images.forEach ( img => {
   observer.observe(img);
})