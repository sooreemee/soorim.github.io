/* 화면 스크롤 됐을 때 헤더에 scrolled 클래스 추가/제거 */
window.addEventListener('scroll', ()=> {
  let scroll = document.querySelector('html').scrollTop

  if( scroll > 100) {
    document.querySelector('.header_top').classList.add('scrolled')
  } else {
    document.querySelector('.header_top').classList.remove('scrolled')
  }
})

/* 소개 화면에 skills 에서 나오는 막대그래프 애니메이션 */
let gauges = document.querySelectorAll('.gauge')
gauges.forEach((item, i)=> {
  gsap.to(item, {
    scale: 1,
    duration: 0.5,
    delay: i * 0.3,
    scrollTrigger: {
      trigger: '.skill_list',
      start: 'top 75%',
      end: 'bottom 25%',
    }
  })
})

/* gallery 슬라이드 */
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoHeight: true,
  // effect: "fade",
  autoplay: {
    delay: 30000,
    disableOnInteraction: false,
  },
  breakpoints: {
    720: {
      slidesPerView: 3,
      spaceBetween: '7%',
    },
  },
});

/* 포트폴리오 데이터 */
let portfolioData = [
  {
    subject : '포트폴리오 1번',
    tags : '#반응형웹 #2주작업 #웹접근성준수 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등',
    imgSrc : ['./img/portfolio01.jpg','./img/portfolio01.jpg', './img/portfolio01.jpg'],
    desc: '처음 퍼블리싱 배울 때 공부하면서...'
  },
  {
    subject : '포트폴리오 2번',
    tags : '#반응형웹 #2주작업 #웹접근성준수 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등',
    imgSrc : ['./img/portfolio02.jpg','./img/portfolio02.jpg'],
    desc: '처음 퍼블리싱 배울 때 공부하면서...'
  },
  {
    subject : '포트폴리오 3번',
    tags : '#반응형웹 #2주작업 #웹접근성준수 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등',
    imgSrc : './img/portfolio03.jpg',
    desc: '처음 퍼블리싱 배울 때 공부하면서...'
  },
  {
    subject : '포트폴리오 4번',
    tags : '#반응형웹 #2주작업 #웹접근성준수 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등',
    imgSrc : './img/portfolio04.jpg',
    desc: '처음 퍼블리싱 배울 때 공부하면서...'
  },
  {
    subject : '포트폴리오 5번',
    tags : '#반응형웹 #2주작업 #웹접근성준수 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등',
    imgSrc : './img/portfolio05.jpg',
    desc: '처음 퍼블리싱 배울 때 공부하면서...'
  },
  {
    subject : '포트폴리오 6번',
    tags : '#반응형웹 #2주작업 #웹접근성준수 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등 #기타등등',
    imgSrc : './img/portfolio06.jpg',
    desc: '처음 퍼블리싱 배울 때 공부하면서...'
  },
]

/* 포트폴리오 리스트 생성하기 */
portfolioData.forEach((data)=> {

  let img
  if ( Array.isArray(data.imgSrc) ) { // => 배열일 경우 
    img = data.imgSrc[0]
  } else { // => 배열이 아닐 경우
    img = data.imgSrc
  }

  let html = `<li>
                <a href="">
                  <div class="txt">
                    <strong>${data.subject}</strong>
                    <p>${data.tags}</p>
                  </div>
                  <img src="${img}" alt="">
                </a>
              </li>`
  document.querySelector('.portfolio_list').insertAdjacentHTML('beforeend', html)
})

/* 포트폴리오 클릭할 때 팝업 데이터 바인딩하기 */
let links = document.querySelectorAll('.portfolio_list a')
let popup = document.querySelector('.portfolio_pop')

links.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault() // 기본 동작 막기

popup.style.display = 'block'
document.querySelector('body').
    // 클릭한 li의 index를 가져온다
    console.log('index', index)

    // portfolioData[index].subject 데이터를 팝업의 h1태그에 바인딩 한다
    popup.querySelector('h1').innerHTML = portfolioData[index].subject

    // portfolioData[index].desc 데이터를 팝업의 p태그에 바인딩 한다
    popup.querySelector('p').innerHTML = portfolioData[index].desc
    
    popup.querySelector('img_wrap').innerHTML = ''
    // portfolioData[index].imgSrc 데이터를 팝업의 img 태그에 속성으로 넣어준다

    if(Array.isArray(portfolioData[index].imgSrc)) {
      portfoliData[index].imgSrc.forEach((data)==> {
        let html = '<img src = "${data}' alt=''>
        popup.querySelector('.img_wrap')
      })    }
      else {
        let html = '<img src=${portfolioData[index]'
      }

      popup.querySelector('img_wrap').setAttribute('src', portfolioData[index].imgSrc[0])

  })
})

/* 포트폴리오 팝업창의 닫기 버튼 */
document.querySelector('.portfolio_pop button').addEventListener('click', ()=> {
  document.querySelector('.portfolio_pop').style.display = 'none'
  document.querySelector('body').classList.remove('non_scroll')
})


emailjs.init({
  publicKey: 'service_k8m0ky5',
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});
emailjs.send('service_k8m0ky5', 'service_k8m0ky5', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
