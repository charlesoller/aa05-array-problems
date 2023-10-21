const findMinimum = arr => {
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
  return min;
};

const runningSum = arr => {
  let sumArr = [];
  let runningTotal = 0;

  for(let i = 0; i < arr.length; i++){
    runningTotal += arr[i];
    sumArr.push(runningTotal);
  }

  return sumArr;
};

const evenNumOfChars = arr => {
  let counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length % 2 === 0){
      counter++;
    }
  }
  return counter;
};

const smallerThanCurr = arr => {
  let smallerArr = [];

  for(let i = 0; i < arr.length; i++){
    let max = arr[i];
    let counter = 0;
    for(let j = 0; j < arr.length; j++){
      if(arr[j] < max){
        counter++;
      }
    }
    smallerArr.push(counter);
  }

  return smallerArr;
};


const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
