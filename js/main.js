const Counter = () => {
  let count = 0;
  const counterDOM = document.querySelector("#counter");
  const counterContainerElement = document.querySelector("#counter-container");

  const increment = () => {
    count++;
  };
  const render = () => {
    counterDOM.textContent = count;
  };
  const createIncrementBtn = () => {
    const button = document.createElement("button");
    button.textContent = "+";
    button.onclick = () => {
      increment();
      render();
    };
    return button;
  };
  return {
    init() {
      const incrementBtn = createIncrementBtn();
      counterContainerElement.appendChild(incrementBtn);
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const counter = Counter();
  counter.init();
});