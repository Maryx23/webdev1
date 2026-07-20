function processData(dataArray, callback) {
  const result = [];
  for (let i = 0; i < dataArray.length; i++) {
    result.push(callback(dataArray[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processData(numbers, (num) => num * num);
console.log(squaredNumbers);