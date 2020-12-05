const Counter = () => {
  let count = 0;
  const counterDOM = document.querySelector("#counter");
  const incrementBtn = document.querySelector("#increment");

  const increment = () => {
    count++;
  };
  const render = () => {
    counterDOM.textContent = count;
  };
  return {
    init() {
      incrementBtn.addEventListener("click", () => {
        increment();
        render();
      });
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const counter = Counter();
  counter.init();
});