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