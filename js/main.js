const counter = () => {
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
      counterDOM.addEventListener("click", () => {
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