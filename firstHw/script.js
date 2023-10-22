"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.


const arr = [1, 5, 7, 9];
Math.min(...arr);


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.


function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getCounter() {
      return counter;
    },
  };
}

const changeCounter = createCounter();
changeCounter.increment();
console.log(changeCounter.getCounter());
changeCounter.decrement();
console.log(changeCounter.getCounter());


// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.


function findElementByClass(rootEl, className) {
  if (rootEl != null) {
    if (rootEl.classList.contains(className)) {
      return rootEl;
    }

    for (let i = 0; i < rootEl.children.length; i++) {
      const foundElement = findElementByClass(rootEl.children[i], className);
      if (foundElement) {
        return foundElement;
      }
    }
    return null;
  }
  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
