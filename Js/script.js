$(document).ready(function () {
  $(".slider").slick({
    //--Стрелки прокрутки--//
    arrows: true,
    //--Точки прокрутки--//
    dots: false,
    //--Адаптивная высота. при True нужно еще кое-что менять--//
    adaptiveHeight: false,
    //--Количество слайдов которое показывается--//
    slidesToShow: 1,
    //--Количество слайдов на которое листает кнопка--//
    slidesToScroll: 1,
    //--Скорость смены--//
    speed: 1000,
    //--Стиль смены слайдов--//
    easing: "ease",
    //--Круговая прокрутка (разрешена/запрещена)--//
    infinite: true,
    //--Стартовый слайд--//
    initialSlide: 0,
    //--Автоматически проигрывать слайды--//
    autoplay: false,
    //--Период авто прокрутки (по умолчанию "3000" это 3 сек.)--//
    autoplaySpeed: 5000,
    //--Пауза при наведении мышки--//
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    //--Свайпанье на ПК--//
    draggable: true,
    //--Свайпание для тач скринов--//
    swipe: true,
    //--Расстояние которое нужно просвайпать для смены слайда--//
    touchThreshold: 15,
    touchMove: true,
    //--При нажатии на боковые кнопки ожидание анимации--//
    waitForAnimate: true,
    //--Центрирование слайда--//
    centerMode: true,
    variableWidth: true,
    //--Строки--//
    rows: 1,
    slidesPerRow: 1,
    //--Вертикальный слайдер--//
    vertical: false,
    verticalSwiping: false,
    //--Смена слайдов всплыванием--//
    fade: false,
    //--Связать два слайдера между собой--//
    //--asNavFor:".Стиль слайдера", указать двум слайдерам друг друга--//
  });
});

"use strict";

// Определение с какого устройства идет просмотр страницы
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
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// Открытик/закрытие меню бургер
const burgerMenu = document.querySelector(".burger__icon");
const burgerClose = document.querySelector(".burger__close");
const burgerItem = document.querySelector(".burger__menu");
const burgerContacts = document.querySelector(".burger__footer");

if (burgerMenu) {
  const burger = document.querySelector(".burger");
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burgerClose.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
    e.preventDefault();
  });
  burgerItem.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burgerContacts.addEventListener("click", function (e) {
    document.body.classList.toggle("body-lock");
    burger.classList.toggle("burger-active");
  });
  burger.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__body")) {
      document.body.classList.toggle("body-lock");
      burger.classList.toggle("burger-active");
    }
  });
}

// Обработка ссылок с data-goto, чтобы в адресной строке не было ничего лишнего.
const Links = document.querySelectorAll(".link[data-goto]");
if (Links.length > 0) {
  Links.forEach((Links) => {
    Links.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const Links = e.target;
    if (Links.dataset.goto && document.querySelector(Links.dataset.goto)) {
      const gotoBlock = document.querySelector(Links.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
      // - document.querySelector('header').offsetHeight
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// Анимированное появление блоков при скролле
const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index ++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add("_active");
      } else {
        if(!animItem.classList.contains("_anim-no-hide")) {
        animItem.classList.remove("_active");
      }
    }
  }
}
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
// ------------------------------------------------------------------
// Секция калькулятор

const floorSpace = document.querySelector('.floor__space');
const servicesCost = document.querySelector('.account');
const costSquareMeterNode = document.querySelector('.cost__squaremeter')

const planningDecisions = document.querySelector('.planning__decisions-selected');
const drawingOptions = document.querySelector('.drawing__options-selected');
const visualizationOptions = document.querySelector('.visualization__options-selected');
const selectTypeBuilding = document.querySelector('.data__place');

const planningDecisionsBtnPlus = document.querySelector('.planning__decisions-plus');
const planningDecisionsBtnMinus = document.querySelector('.planning__decisions-minus');
const drawingOptionsBtnPlus = document.querySelector('.drawing__options-plus');
const drawingOptionsBtnMinus = document.querySelector('.drawing__options-minus');
const visualizationOptionsBtnPlus = document.querySelector('.visualization__options-plus');
const visualizationOptionsBtnMinus = document.querySelector('.visualization__options-minus');
const additionalServicesList = document.querySelector('.addition__services-list');

const MIN_COUNTER_VALUE = 1;
const MAX_COUNTER_VALUE = 5;
const COST_SQUARE_METER_FLAT = 1000;
const COST_SQUARE_METER_HOME = 2000;
const CURRENCY = ' ₽';

let counterPlanningDecisions = 1;
let counterDrawingOptions = 1;
let counterVisualizationOptions = 1;

init();

selectTypeBuilding.addEventListener('change', typeBuilding)

floorSpace.addEventListener('input', CalcProjectCost);
additionalServicesList.addEventListener('click', CalcProjectCost);

planningDecisionsBtnPlus.addEventListener('click' , () => addProjectContent(counterPlanningDecisions, planningDecisions));
planningDecisionsBtnMinus.addEventListener('click', () => removeProjectContent(counterPlanningDecisions, planningDecisions));

drawingOptionsBtnPlus.addEventListener('click' , () => addProjectContent(counterDrawingOptions, drawingOptions));
drawingOptionsBtnMinus.addEventListener('click', () => removeProjectContent(counterDrawingOptions, drawingOptions));

visualizationOptionsBtnPlus.addEventListener('click' , () => addProjectContent(counterVisualizationOptions, visualizationOptions));
visualizationOptionsBtnMinus.addEventListener('click', () => removeProjectContent(counterVisualizationOptions, visualizationOptions));

function init() {
  costSquareMeterNode.innerText = COST_SQUARE_METER_FLAT;
}

function CalcProjectCost() {
  let cost = floorSpace.valueAsNumber * costSquareMeterNode.innerText;

  const checkboxes = document.querySelectorAll('.service__checkbox')
  let checkboxesValue = [];
  let checkboxesName = [];
  let price = +cost;

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      cost + parseInt(checkbox.value);
      checkboxesName.push(checkbox.name);
      checkboxesValue.push(parseInt(checkbox.value))
    }
  }
  if (checkboxesValue.length > 0) {
    const sumOfcheckboxesValue = checkboxesValue.reduce((acc, checkboxValue) => acc + checkboxValue);
    price = +cost + +sumOfcheckboxesValue;
  }
  if (checkboxesValue.length == 0) {
    price = +cost;
  } 
  let priceFormatted = price.toLocaleString('ru-Ru');

  servicesCost.innerText = priceFormatted + CURRENCY; 
};

function typeBuilding(e) {
  if (e.target.value === 'квартира') {
    costSquareMeterNode.innerText = COST_SQUARE_METER_FLAT;
  }
  if (e.target.value === 'дом') {
    costSquareMeterNode.innerText = COST_SQUARE_METER_HOME;
  }
  CalcProjectCost();
}

function addProjectContent(counter, output) {
  counter = output.innerText;
  counter++;
  if (counter > MAX_COUNTER_VALUE) {
    counter = MAX_COUNTER_VALUE;
  }
  output.innerText = counter;
};

function removeProjectContent(counter, output) {
  counter = output.innerText;
  counter--;
  if (counter < MIN_COUNTER_VALUE) {
    counter = MIN_COUNTER_VALUE;
  }
  output.innerText = counter;
};