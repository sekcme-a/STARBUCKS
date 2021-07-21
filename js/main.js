const badgeEl = document.querySelector('header .badges'); //12
const toTopEl = document.querySelector('#to-top'); //32

window.addEventListener('scroll', _.throttle(function(){ //12
  if(window.scrollY>500){ //12
    gsap.to(badgeEl, .6, { //12
      opacity: 0, //12
      display: 'none' //12
    }); //12
    gsap.to(toTopEl, .2, { //32
      x: 0 //32
    }) //32
  } else{ //12
    gsap.to(badgeEl, .6, { //12
      opacity: 1, //12
      display: 'block' //12
    }); //12
    gsap.to(toTopEl, .2, { //32
      x: 100 //32
    }); //32
  } //12
}, 300)); //12

toTopEl.addEventListener('click', function(){ //32
  gsap.to(window, .7, { //32
    scrollTo: 0 //32
  }); //32
}) //32


//Title images fade-in //15
const fadeEls = document.querySelectorAll('.visual .fade-in'); //15

fadeEls.forEach(function(fadeEl, index){ //15
  gsap.to(fadeEl, 1, { //15
    delay: (index+1)* .7, //15
    opacity: 1 //15
  }) //15
}); //15


//Swiper  // 17
new Swiper('.notice-line .swiper-container',{ // 17
  direction: 'vertical', // 17
  autoplay: true, // 17
  loop: true // 17
}); // 17

new Swiper('.promotion .swiper-container', { //19
  slidesPerView: 3, //19
  spaceBetween: 10, //19
  centeredSlides: true, //19
  loop: true, //19
  autoplay:{ //19
    delay: 5000 //19
  }, //19
  pagination: { //19
    el: '.promotion .swiper-pagination', //19
    clickable: true //19
  }, //19
  navigation: { //19
    prevEl: '.promotion .swiper-prev', //19
    nextEl: '.promotion .swiper-next' //19
  } //19
}); //19

new Swiper('.awards .swiper-container', { //30
  slidesPerView: 5, //30
  spaceBetween: 30, //30
  loop: true, //30
  autoplay:true, //30
  navigation: { //30
    prevEl: '.awards .swiper-prev', //30
    nextEl: '.awards .swiper-next' //30
  } //30
}); //30


const promotionEl = document.querySelector('.promotion'); //21
const togglePromotionBtn = document.querySelector('.toggle-promotion .material-icons'); //21
let isHidePromotion = false; //21

togglePromotionBtn.addEventListener('click', function(){ //21
  isHidePromotion = !isHidePromotion //21
  if(isHidePromotion){ //21
    promotionEl.classList.add('hide'); //21
  } //21
  else{ //21
    promotionEl.classList.remove('hide'); //21
  } //21
}); //21



// 범위 랜덤 함수(소수점 2자리까지) //25
function random(min, max) { //25
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2)) //25
}; //25

function floatingObject(selector, delay, size){ //25
  gsap.to(selector, random(1.5, 2.5),{ //25
    y: size, //25
    yoyo: true, //25
    repeat: -1, //25
    ease: Power1.easeInOut, //25
    delay: random(0, delay) //25
  }) //25
} //25
 //25
floatingObject('.floating1', 1, 15); //25
floatingObject('.floating2', .5, 15); //25
floatingObject('.floating3', 1.5, 20); //25


//스크롤매직   //28,29
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

