// 상단 배너 스와이퍼
const bannerSlide = new Swiper(".banner-slide", {
  loop:true,
  effect: "fade",
  autoplay:true,
  speed:500,
});

// sc-visual 스와이퍼
const main = new Swiper(".main-slide", {
    loop:true,
    effect: "fade",
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

// header 내려오기 효과
  $(window).scroll(function(){
    current = $(this).scrollTop()

    if (current > 0) {
      $('.header').addClass('show')
      $('.gnb-wrap').addClass('show')
    } else {
      $('.header').removeClass('show')
      $('.gnb-wrap').removeClass('show')
    }
  })
  $(window).trigger('scroll'); //강제실행


 //상단 목록 여닫기
$('.group-gnb .btn-open').click(function(){
  $('.group-gnb').toggleClass('open');
  $('.group-gnb .sub-wrap').slideToggle();
})

 //aside-menu 여닫기 효과
$('.link.btn-open').click(function(e){
  e.preventDefault();
  $('.aside-menu').addClass('slide')
  $('body').addClass('o-hidden');
})

$('.aside-menu .btn-close').click(function(e){
  e.preventDefault();
  $('.aside-menu').removeClass('slide')
  $('body').removeClass('o-hidden');
})


//aside-menu 목록 여닫기
$('.aside-menu .gnb-item').click(function(){
 if ($(this).children('.sub-list').css('display') === 'block') {
  $(this).children('.sub-list').slideUp();
  $(this).removeClass('active')
 } else {
  $(this).children('.sub-list').slideDown();
  $(this).addClass('active');
 }
})





// blur 눌렀을 때 aside-menu 닫기

// $('body').click(function(e){ //바디를 클릭 했을 때
//   // e.target : 내가 클릭한 태그를 찝어줌
//   // 뜻: header가 내가 선택한 그 태그의  가지고 있냐? 
//   // length: 있으면 1, 없으면 0 (두개면 2) .. 
//     if( !$('.header').has(e.target).length ){
//       $('.aside-menu').removeClass('slide')
//       $('body').removeClass('o-hidden');
//     }
// })

$('.dimmed').click(function(){
  $('.aside-menu').removeClass('slide');
  $('body').removeClass('o-hidden');
})



//category swiper
const categorySlide = new Swiper(".sc-category .swiper", {
  slidesPerView:2.1,
  spaceBetween:10,
});


//스크롤

let lastScroll = 0;

$(window).scroll(function(){

  current = $(this).scrollTop();

  if (current > lastScroll) {
    $('.fixed-area').removeClass('show');
  } else {
    $('.fixed-area').addClass('show');
  }

  lastScroll = current;

  if (current <= 80) {
    $('.fixed-area').removeClass('show');
  } else {
    
  }
})