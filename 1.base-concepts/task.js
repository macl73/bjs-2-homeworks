"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = (Math.pow(b, 2) - (4 * a * c));
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (typeof percent !== 'number') {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (typeof contribution !== 'number') {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (typeof amount !== 'number') {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let s = amount - contribution;
    let now = new Date();
    let n = (date.getFullYear() - now.getFullYear()) * 12 + (date.getMonth() - now.getMonth());
    let p = percent / 100 / 12;
    let monthlyPayment = s * (p + (p / ((Math.pow((1 + p), n)) - 1)));
    totalAmount = Number((monthlyPayment * n).toFixed(2));
  }
  console.log(totalAmount);
  return totalAmount;
}
