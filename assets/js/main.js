/** 1월 18일 Java Script 통합 작업
 *  
 *  
 *  
 */

/*
index.html 슬라이더 병합 작업
*/
if (document.querySelector('.reporterSwiper') !== null) {

  const reportSwiper = new Swiper(".reporterSwiper", {
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    // spaceBetween: window.innerWidth < 992 ? 10 : 50, // 슬라이드 사이 여백

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {

      1024: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      425: {
        slidesPerView: 3,  //브라우저가 1024보다 클 때
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,  //브라우저가 1024보다 클 때
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: 'slide',
    loop: true,
    loopAdditionalSlides: 1,
  });

}
if (document.querySelector('.mySwiper') !== null) {

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    breakpoints: {

      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      425: {
        slidesPerView: 2,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: 'slide',
    loop: true,
    loopAdditionalSlides: 1,
  });
}

function toggleClassList(target, className) {
  target.classList.toggle(className);
}

function addClassList(target, className) {
  target.classList.add(className);
}

function removeClassList(target, className) {
  target.classList.remove(className);
}

/**
상태코드
클라이언트가 보낸 요청의 처리 상태를 응답해서 알려주는 기능

100: 요청이 수신되어 처리중
200: 요청 정상 처리중
300: 요청을 완료하려면 추가 행동이 필요
400: 클라이언트 오류, 잘못된 문법등으로 서버가 요청을 수행할 수 없음
500: 서버 오류, 서버가 정상 요청을 처리하지 못함

2xx: 성공(Successful)
200 OK -> 
201 Created 요청 성공해서 새로운 리소스가 생성됨
202 Accepted 요청이 접수되었으니 처리가 완료되지 않았음
204 No Content 서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없음(웹 문서 편집기에서 save 버튼을 눌렀다고 했을 때, 따로 결과를 받지 않고 저장이 잘 되었다는 응답만 있으면 되기 때문)

3xx: 요청을 완료하기 위해 유저 에이전트의 추가 조치 필요(Redirection)
  웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동(리다이렉트)
영구 리다이렉션 - 특정 리소스의 URI 가 영구적으로 이동
일시 리다이렉션 - 일시적인 변경(주문 완료 후 주문 내역 화면으로 이동)
특수 리다이렉션 - 결과 대신 캐시를 사용

  영구 리다이렉션: 301, 308
    리소스의 URI 가 영구적으로 이동
    원래의 URL 을 사용X, 검색 엔진 등에서도 변경 인지
    301 Moved Permanently 리다이렉트시 요청 메서드가 GET 으로 변경하고, 본문이 제거될 수 있음
    308 Permanent Redirect 301과 기능은 같지만 리다이렉트시 요청 메서드와 본문 유지

  일시적 라다이렉션: 302, 307, 303
    리소스의 URI가 일시적으로 변경
    따라서 검색 엔진 등에서 URL 을 변경하면 안됨

  302 Found
  리다이렉트시 요청 메서드가 GET 으로   
  */

function handleHeaderSearchBtn() {
  const headerSearchBtn = document.querySelector('.searchBtn');
  const controlTarget = document.querySelector('.searchContentsArea');
  const searchPopupCloseBtn = document.querySelector('.closeBtn');

  headerSearchBtn.addEventListener('click', () => toggleClassList(controlTarget, 'hide'))

  searchPopupCloseBtn.addEventListener('click', () => toggleClassList(controlTarget, 'hide'))
};


function handleHamburgerMenuBtn() {
  const hamburgerMenu = document.querySelector('.hamburgerMenu');
  const marginArea = document.querySelector('.marginArea')
  const classNameTarget = document.querySelector('.sideMenuArea');
  hamburgerMenu.addEventListener('click', () => { toggleClassList(classNameTarget, 'action') });
  marginArea.addEventListener('click', () => { toggleClassList(classNameTarget, 'action') })
};

function popupToggle(toggleBtn, area, closeBtnClass) {
  if (document.querySelector(`.${toggleBtn}`) !== null) {
    const BTN = document.querySelector(`.${toggleBtn}`)
    const AREA = document.querySelector(`.${area}`)
    BTN.addEventListener('click', () => toggleClassList(AREA, 'hide'));

    AREA.addEventListener('click', (e) => {
      if (e.target.className === AREA.className || e.target.className === closeBtnClass) {
        toggleClassList(AREA, 'hide');
      };
    });
  };
}

handleHamburgerMenuBtn();

handleHeaderSearchBtn()

popupToggle('privacyBtn', 'privacyArea', 'xi-close-thin xi-2x');

popupToggle('policyBtn', 'policyArea', 'xi-close-thin xi-2x');

if (document.querySelector('.managingUserInfoArea') !== null) {
  const managingUserInfoArea = document.querySelector('.managingUserInfoArea'); // 시작하기(로그인, 회원가입, 계정 찾기) popup display
  const signUpBtn = document.querySelector('.signUpBtn'); // header 시작하기 버튼
  const sideMenu = document.querySelector('.sideMenuArea'); // 사이드 메뉴
  const findUser = document.querySelector('.findUser'); // 사이드메뉴 계정을 잊어버리셨나요 버튼
  const contentsISignUpBtn = document.querySelector('.contentsISignUpBtn') // 사이드메뉴 세계유산 시작하기 버튼
  const loginViewArea = document.querySelector('.loginViewArea'); // 로그인 팝업 화면
  const findUserInfoArea = document.querySelector('.findUserInfoArea'); // 계정 찾기 팝업 화면
  const manaingSignUpArea = document.querySelector('.manaingSignUpArea'); // 회원가입 팝업 화면
  const popupMenuItemList = document.querySelectorAll('.managingUserInfoSide ul li') // 팝업 로그인, 계정찾기, 회원가입 화면
  const subTitleBtnArea = document.querySelectorAll('.subTitleBtnArea') // 팝업 오른쪽 하단 로그인, 계정찾기, 회원가입 버튼들
  // 로그인, 계정찾기, 회원가입 동작 로직
  subTitleBtnArea.forEach(doc => { // doc(3ea) = 로그인(1ea), 계정찾기(1ea), 회원가입(1ea) 팝업디스플레이
    doc.addEventListener('click', (e) => {
      const target = e.target.innerText;
      popupMenuItemList.forEach(item => addClassList(item, 'hide')); //로그인, 계정찾기, 회원가입 디스플레이 모두 숨김처리
      target === '계정찾기' ? removeClassList(findUserInfoArea, 'hide') : (target === '회원가입' ? removeClassList(manaingSignUpArea, 'hide') : removeClassList(loginViewArea, 'hide')); // 조건에 맞는 화면 노출
    })
  })
  if (document.querySelector('.contentsISignUpBtn') !== null) {
    contentsISignUpBtn.addEventListener('click', () => {
      handleSideMenuInPopupBtn()
      popupMenuItemList.forEach(item => item.classList[0] === 'loginViewArea' ? removeClassList(item, 'hide') : addClassList(item, 'hide'))
      if (managingUserInfoArea.classList[1] !== 'hide') {
        if (document.querySelector('.popupSwiper') !== null) {
          const popupSwiper = new Swiper('.popupSwiper', {
            slidesPerView: 1,
            loop: true,
            autoplay: {     //자동슬라이드 (false-비활성화)
              delay: 2500, // 시간 설정
              disableOnInteraction: false, // false-스와이프 후 자동 재생
            },
          })
        }
      }
      document.querySelector('.managingUserInfoContents').scrollTo({ left: 0, top: -1000, behavior: "smooth" });
    })

    findUser.addEventListener('click', () => {
      handleSideMenuInPopupBtn()
      popupMenuItemList.forEach(item => item.classList[0] === 'findUserInfoArea' ? removeClassList(item, 'hide') : addClassList(item, 'hide'))
      if (managingUserInfoArea.classList[1] !== 'hide') {
        if (document.querySelector('.popupSwiper') !== null) {
          const popupSwiper = new Swiper('.popupSwiper', {
            slidesPerView: 1,
            loop: true,
            autoplay: {     //자동슬라이드 (false-비활성화)
              delay: 2500, // 시간 설정
              disableOnInteraction: false, // false-스와이프 후 자동 재생
            },
          })
        }
      }
      document.querySelector('.managingUserInfoContents').scrollTo({ left: 0, top: -1000, behavior: "smooth" });
    })
  }
  popupToggle('signUpBtn', 'managingUserInfoArea', 'xi-close-thin xi-2x');
  signUpBtn.addEventListener('click', () => {
    popupMenuItemList.forEach(item => item.classList[0] === 'loginViewArea' ? removeClassList(item, 'hide') : addClassList(item, 'hide'))
    if (managingUserInfoArea.classList[1] !== 'hide') {
      if (document.querySelector('.popupSwiper') !== null) {
        const popupSwiper = new Swiper('.popupSwiper', {
          slidesPerView: 1,
          loop: true,
          autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 2500, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
          },
        })
      }
    }
    document.querySelector('.managingUserInfoContents').scrollTo({ left: 0, top: -1000, behavior: "smooth" });
  })

  /**
   * 김동현
   * 사이드메뉴 안에 있는 팝업 토글 버튼 클릭 시 팝업 디스플레이를 켜주고 사이드메뉴 디스플레이를 꺼줌
   */
  function handleSideMenuInPopupBtn() {
    removeClassList(managingUserInfoArea, 'hide'); // 팝업 디스플레이 노출
    removeClassList(sideMenu, 'action'); // 사이드메뉴 끄기
  }
};


const modal = document.querySelector(".modal"); //이미지 이벤트를 위한 div
const img = document.querySelector(".profileUserImage"); //이미지 파일 
const modal_img = document.querySelector(".modal_content"); // 확대한 이미지를 보기 위한것이다
const span = document.querySelector(".close"); //마우스 커서가 밖을 클릭할 시 확대된 이미지가 꺼진다
const control_btn = document.querySelector(".control-btn");// 프로필 소개 부분 토글
//pagination.js 를 가져온 부분
const relink = document.getElementsByClassName("re_page_link"); //페이지 버튼 클릭 시 색 변환을 위해 사용한다
const latest = document.getElementsByClassName("tit-search1"); // 게시물 페이지에 댓글을 보기 위해 사용한다
//댓글 부분
const commentbtn = document.querySelector('.nws-btncm');
const commentbox = document.querySelector('.nws-comment');


/*
기자 프로필 페이지에 이미지 클릭 시 확대를 위해 만든 부분
*/
if (document.querySelector('.profileUserImage') !== null) {

  img.addEventListener('click', () => {
    modalDisplay("block");
    modal_img.src = img.src;
  });
  span.addEventListener('click', () => {
    modalDisplay("none");
  });
  modal.addEventListener('click', () => {
    modalDisplay("none");
  });
  function modalDisplay(text) {
    modal.style.display = text;
  }
}

if (document.querySelector('.control-btn') !== null) {
  control_btn.addEventListener('click', () => {
    const btn1 = document.getElementById('btn1');
    btn1.style.display !== 'none' ? btn1.style.display = 'none' : btn1.style.display = 'block';
  });
}


// 코멘트 토글 부분
if (document.querySelector('.nws-btncm') !== null) {
  commentbtn.addEventListener('click', function () {
    commentbox.classList.toggle('flipped');
  });
}


// 정확도 최신 토글
function toggleClick(event) {

  for (var i = 0; i < latest.length; i++) {
    latest[i].classList.remove("btntoggle");
  }

  event.target.classList.add("btntoggle");
}

// 아래 번호 부분
function Click(event) {
  for (var i = 0; i < relink.length; i++) {
    relink[i].classList.remove("tab");
  }
  event.target.classList.add("tab");
}

function init() {
  for (var i = 0; i < relink.length; i++) {
    relink[i].addEventListener("click", Click);
  }
  for (var i = 0; i < latest.length; i++) {
    latest[i].addEventListener("click", toggleClick);
  }
}

init();

if (document.querySelector('.report') !== null) {
  const complaintBtns = document.querySelectorAll('.report');
  complaintBtns.forEach(btn => {
    btn.addEventListener('click', () => handleComplaintBtn());
  });
}

if (document.querySelector('.btnReportProfile')) {
  const ReportProfileBtns = document.querySelectorAll('.btnReportProfile');
  ReportProfileBtns.forEach(
    btn => {
      btn.addEventListener('click', () => handleComplaintBtn());
    });
}

function handleComplaintBtn() {
  if (confirm('정말로 신고하시겠습니까?')) {
    alert('신고가 완료되었습니다.')
    return true
  } else {
    return false
  }
}



if (document.querySelector('.btnBlockProfile')) {
  const BlockProfileBtns = document.querySelectorAll('.btnBlockProfile');
  BlockProfileBtns.forEach(
    btn => {
      btn.addEventListener('click', () => handleBlockBtn());
    });
}


function handleBlockBtn() {
  if (confirm('정말로 차단하시겠습니까?')) {
    alert('차단이 완료되었습니다.')
    return true
  } else {
    return false
  }
}