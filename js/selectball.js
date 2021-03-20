const selectBall = () => {
  const select = document.querySelector(".select");
  const selectHeader = document.querySelector(".select__header");
  const selectItems = document.querySelectorAll(".select__li");
  const selectArrow = document.querySelector(".signup__member-arrow");

  selectHeader.addEventListener("click", selectToogle);

  selectItems.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToogle() {
    select.classList.toggle("select--active");
    selectArrow.classList.toggle("signup__member-arrow--active");
  }

  function selectChoose() {
    const text = this.innerText;
    const currentElem = select.querySelector(".select__current");
    const ball = this.querySelector(".select__ball");
    const currentBall = select.querySelector(".select__currentball");

    currentElem.innerHTML = text;
    currentBall.src = ball.src;

    select.classList.remove("select--active");
    selectArrow.classList.remove("signup__member-arrow--active");
  }
};

selectBall();