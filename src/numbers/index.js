const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0;
}

const sum = (numbers) => {
  // write code for numbers.sum
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  })
  return sum;
}

const comboSum = (numbers, total) => {
  // write code for numbers.comboSum
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  })
  return sum === total;
}

module.exports = {
  isEven,
  sum,
  comboSum
}