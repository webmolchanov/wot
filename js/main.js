// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// ========================================================================

// IBG
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
  ibg();
// ========================================================================

$(".burger-menu").click(function () {
  $('.burger-block').addClass('js-active');
  $('.bg-overley').addClass('js-active')
  $('body').addClass('lock');
});
$('.burger-block__exit').click(function(e) {
 $('.burger-block').removeClass('js-active');
 $('.bg-overley').removeClass('js-active');
 $('body').removeClass('lock');
});
$('.bg-overley').click(function(e) {
  $(this).removeClass('js-active');
  $('.burger-block').removeClass('js-active');
 $('body').removeClass('lock');
});


//scroll
$('.custom-scroll').mCustomScrollbar({
    axis: 'y',              // вертикальный скролл 
    theme: 'rounded',  // тема 
    scrollInertia: '500',   // продолжительность прокрутки, значение в миллисекундах  
    mouseWheel: {
        deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
    }
});

// ========================================================================

// slider

$(function(){
  $('.slider__wrapper').slick({
    prevArrow:
    '.arrow__left',
    nextArrow:
    '.arrow__right',
    slideToShow:1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
});

$('.js-popular-product__slide').slick({
  prevArrow:
  '.popular-product__arrows--prev',
  nextArrow:
  '.popular-product__arrows--next',
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
]
});


$('.js-products__slider').slick({
  prevArrow:
  '.item-products__arrows--prev-1',
  nextArrow:
  '.item-products__arrows--next-1',
  rows: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesPerRow:1,
  autoplay: false,
  dots: false,
  responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesPerRow:1,
            rows:1,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
  ]
});

$('.js-products__slider2').slick({
  prevArrow:
  '.item-products__arrows--prev-2',
  nextArrow:
  '.item-products__arrows--next-2',
 rows: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
  ]
});

$('.js-products__slider3').slick({
  prevArrow:
  '.item-products__arrows--prev-3',
  nextArrow:
  '.item-products__arrows--next-3',
  rows: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
  ]
});

$('.js-products__slider4').slick({
  prevArrow:
  '.item-products__arrows--prev-4',
  nextArrow:
  '.item-products__arrows--next-4',
  rows: 2,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
  ]
});

$('.js-popular-product__show').click(function(e) {
  e.preventDefault();
  $('.js-popular-product__slide').slick('unslick');
  $('.js-popular-product__slide').addClass('popular-product__slide_style');
  $('.js-popular-product__arrows').addClass('js-arrow');
  $(this).hide();
  $('.js-popular-product__hide').show();
});

$('.js-popular-product__hide').click(function(e) {
  e.preventDefault();
  $('.js-popular-product__slide').removeClass('popular-product__slide_style');
  $('.js-popular-product__arrows').removeClass('js-arrow');
     $('.js-popular-product__slide').slick({
      prevArrow:
      '.popular-product__arrows--prev',
      nextArrow:
      '.popular-product__arrows--next',
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
    });
  $(this).hide();
  $('.js-popular-product__show').show();
});

//Region
$('.region-default__city').click(function(e) {
  e.preventDefault();
  $(this).parent('.region-default').find('.drop__region').slideToggle();
  $(this).parent('.region-default').find('.drop__region').toggleClass('active');
});
$('.region-default__city').mouseleave(function(e) {
  $(this).parent('.region-default').find('.drop__region').fadeOut();
});


 $('.dropSelect span').click(function(event) {
    var selectText = $(this).parents('.select').find('.select-title span').html(),
        selectText2 = $(this).html();
  console.log(selectText2);
        $(this).parents('.dropSelect').fadeOut();
    $(this).parents('.dropSelect').siblings('.select-title').find('span').html(selectText2);
  $(this).html(selectText)
});


//Select 
 $('.select-title').click(function(event) {
    $(this).parent('.select').find('.dropSelect').slideToggle();
    $(this).parent('.select').find('span').toggleClass('active');
  });
  $('.dropSelect').mouseleave(function(e) {
   $(this).fadeOut();
  });

   $('.dropSelect span').click(function(event) {
      var selectText = $(this).parents('.select').find('.select-title span').html(),
          selectText2 = $(this).html();
    console.log(selectText2);
          $(this).parents('.dropSelect').fadeOut();
      $(this).parents('.dropSelect').siblings('.select-title').find('span').html(selectText2);
    $(this).html(selectText)
  });

 // 
 $(".news-abc").text(function(i, text) {

  if (text.length >= 200) {
    text = text.substring(0, 200);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }
  
  $(this).text(text);
  
});

$(".comments-abc").text(function(i, text) {

  if (text.length >= 150) {
    text = text.substring(0, 150);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }
  
  $(this).text(text);
  
});


// footer



jQuery(document).ready(function($){
  
  $(window).resize(function () {
    if($(window).width() <= 768){
      $('.menu-footer__name--1').click(function(event){
        $('.menu-footer__list--1').slideToggle();
      });
      $('.menu-footer__name--2').click(function(event){
        $('.menu-footer__list--2').slideToggle();
      });
    }
  });
});



// Tabs
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  //footer cokie
  $('.bottom-footer__btn').on('click', function (e) {
    e.preventDefault();
    $(this).fadeOut();
    $('.bottom-footer__text:last').fadeOut();
  })

 $('.js-burger-catalog').on('click', function (e) {
    $(this).find('.drop-down__main').slideToggle();
 })
});



// ===== ARTICLE SLIDER ======

$('.js-advise-article__slider').slick({
  prevArrow:
  '.advise-article__arrows--prev',
  nextArrow:
  '.advise-article__arrows--next',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
  ]
});

// ===========================