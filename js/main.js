const Counter = (element) => {
  const counterContainerElement = element;
  let count = 0;
  let counter;

  const createCounter = () => {
    counter = document.createElement("div");
    counter.textContent = count;
    return counter;
  }

  const createResetBtn = () => {
    reset = document.createElement("button");
    reset.textContent = "reset";
    reset.onclick = () => {
      resetBtn();
    }
    return reset;
  }

  const increment = () => {
    count++;
  };
  const decrement = () => {
    count--;
  };
  const render = () => {
    counter.textContent = count;
  };
  const resetBtn = () => {
    count - count;
  };
  const createIncrementBtn = () => {
    const incBtn = document.createElement("button");
    incBtn.textContent = "+";
    incBtn.onclick = () => {
      increment();
      render();
    };
    return incBtn;
  };
  const createDecrementBtn = () => {
    const decBtn = document.createElement("button");
    decBtn.textContent = "-";
    decBtn.onclick = () => {
      decrement();
      render();
    };
    return decBtn;
  };
  return {
    init() {
      const counter = createCounter();
      const incrementBtn = createIncrementBtn();
      const decrementBtn = createDecrementBtn();
      counterContainerElement.appendChild(counter);
      counterContainerElement.appendChild(incrementBtn);
      counterContainerElement.appendChild(decrementBtn);
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const counterEl1 = document.querySelector("#counter-container");
  const counterEl2 = document.querySelector("#counter-container");
  const counterEl3 = document.querySelector("#counter-container");
  const counterEl4 = document.querySelector("#counter-container");
  const counterEl5 = document.querySelector("#counter-container");
  const counter = Counter();
  Counter(counterEl1).init();
  Counter(counterEl2).init();
  Counter(counterEl3).init();
  Counter(counterEl4).init();
  Counter(counterEl5).init();
});