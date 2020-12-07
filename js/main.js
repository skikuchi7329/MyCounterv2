const Counter = (element) => {
  const counterContainerElement = element;
  let count = 0;
  let counter;

  const createCounter = () => {
    counter = document.createElement("div");
    counter.textContent = count;
    return counter;
  }

  const increment = () => {
    count++;
  };
  const render = () => {
    counter.textContent = count;
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
      const counter = createCounter();
      const incrementBtn = createIncrementBtn();
      counterContainerElement.appendChild(counter);
      counterContainerElement.appendChild(incrementBtn);
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const counterEl = document.querySelector("#counter-container");
  const counter = Counter(counterEl);
  counter.init();
});