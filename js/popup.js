const popupOpenBtn = document.querySelectorAll(".popup-openBtn");
const popupCloseBtn = document.querySelectorAll(".popup-closeBtn");
const body = document.querySelector("body");

let unlock = true;

const timeout = 500;

if (popupOpenBtn.length) {
  for (let index = 0; index < popupOpenBtn.length; index++) {
    const currentOpenBtn = popupOpenBtn[index];
    currentOpenBtn.addEventListener("click", function () {
      const popupName = currentOpenBtn.getAttribute("data-popup");
      const currentPopup = document.querySelector(`.${popupName}`);

      popupOpen(currentPopup);
    });
  }
}

if (popupCloseBtn.length) {
  for (let index = 0; index < popupCloseBtn.length; index++) {
    const currentCloseBtn = popupCloseBtn[index];
    currentCloseBtn.addEventListener("click", function () {
      popupClose(currentCloseBtn.closest(".popup"));
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector(".popup--active");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    currentPopup.classList.add("popup--active");
    currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__inner")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("popup--active");

    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("scroll-hidden");

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(() => {
    body.style.paddingRight = "0px";
    body.classList.remove("scroll-hidden");
  }, timeout);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (elem) {
  if (elem.which === 27) {
    const popupActive = document.querySelector(".popup--active");
    popupClose(popupActive);
  }
});