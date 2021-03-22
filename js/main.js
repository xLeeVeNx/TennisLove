const selectBalls = () => {
  const select = document.querySelector('.timetable__select');
  const selectHeader = document.querySelector('.timetable__select-header');
  const selectItems = document.querySelectorAll('.timetable__select-li');


  selectHeader.addEventListener('click', selectToogle);

  selectItems.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToogle() {
    select.classList.toggle('timetable__select--active');
  }

  function selectChoose() {
    const text = this.innerText;
    const currentElem = select.querySelector('.timetable__select-current');
    const ball = this.querySelector('.timetable__select-ball');
    const currentBall = select.querySelector('.timetable__select-currentball');

    currentElem.innerHTML = text;
    currentBall.src = ball.src;

    select.classList.remove('timetable__select--active');
  }
};

const selectMonths = () => {
  const select = document.querySelector('.result__select');
  const selectHeader = document.querySelector('.result__select-header');
  const selectItems = document.querySelectorAll('.result__select-li');


  selectHeader.addEventListener('click', selectToogle);

  selectItems.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToogle() {
    select.classList.toggle('result__select--active');
  }

  function selectChoose() {
    const text = this.innerText;
    const currentElem = select.querySelector('.result__select-current');

    currentElem.innerHTML = toCase(text.toLowerCase());

    select.classList.remove('result__select--active');

    function toCase(str) {
      if (str.slice(-1) === "ь") {
        return str.slice(0, -1) + "я";
      } else if (str.slice(-1) === "т") {
        return str + "а";
      } else if (str.slice(-1) === "й") {
        return "мая";
      }
    }
  }
};

const selectBall = () => {
  const select = document.querySelector('.select');
  const selectHeader = document.querySelector('.select__header');
  const selectItems = document.querySelectorAll('.select__li');

  selectHeader.addEventListener('click', selectToogle);

  selectItems.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToogle() {
    select.classList.toggle('select--active');
  }

  function selectChoose() {
    const text = this.innerText;
    const colorText = this.getAttribute('data-color');
    const currentElem = select.querySelector('.select__current');
    const ball = this.querySelector('.select__ball');
    const currentBall = select.querySelector('.select__currentball');

    currentElem.style.color = colorText;
    currentElem.style.borderColor = colorText;
    currentElem.innerHTML = text;
    currentBall.src = ball.src;

    select.classList.remove('select--active');
  }
};

selectBalls();
selectMonths();
selectBall();

const popupOpenBtn = document.querySelectorAll('.popup-openBtn');
const popupCloseBtn = document.querySelectorAll('.popup-closeBtn');
const body = document.querySelector('body');

let unlock = true;

const timeout = 500;

if (popupOpenBtn.length) {
  for (let index = 0; index < popupOpenBtn.length; index++) {
    const currentOpenBtn = popupOpenBtn[index];
    currentOpenBtn.addEventListener('click', function () {
      const popupName = currentOpenBtn.getAttribute("data-popup");
      const currentPopup = document.querySelector(`.${popupName}`);

      popupOpen(currentPopup);
    });
  }
}

if (popupCloseBtn.length) {
  for (let index = 0; index < popupCloseBtn.length; index++) {
    const currentCloseBtn = popupCloseBtn[index];
    currentCloseBtn.addEventListener('click', function() {
      popupClose(currentCloseBtn.closest('.popup'));
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup--active');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add('popup--active');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__inner')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('popup--active');

    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  body.style.paddingRight = '17px';
  body.classList.add('scroll-hidden');

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(() => {
    body.style.paddingRight = '0px';
    body.classList.remove('scroll-hidden');
  }, timeout);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function(elem) {
  if (elem.which === 27) {
    const popupActive = document.querySelector('.popup--active');
    popupClose(popupActive);
  }
});