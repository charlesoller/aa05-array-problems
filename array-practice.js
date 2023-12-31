const findMinimum = arr => {
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
  return min;
};

//time: O(n)
//space: O(1)

const runningSum = arr => {
  let sumArr = [];
  let runningTotal = 0;

  for(let i = 0; i < arr.length; i++){
    runningTotal += arr[i];
    sumArr.push(runningTotal);
  }

  return sumArr;
};

//time: O(n)
//space: O(n)

const evenNumOfChars = arr => {
  let counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length % 2 === 0){
      counter++;
    }
  }
  return counter;
};

//time: O(n)
//space: O(1)

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

//time: O(n^2)
//space: O(n)

const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        return true;
      }
    }
  }
  return false;
};

//time: O(n^2)
//space: O(1)

const secondLargest = arr => {
  if(arr.length < 2) return undefined;
  let max = arr[0]
  let spliceIndex = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
      spliceIndex = i;
    }
  }
  arr.splice(spliceIndex, 1)
  let secondLargest = arr[0]
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > secondLargest){
      secondLargest = arr[i]
    }
  }
  return secondLargest
};

//time: O(n)
//space: O(1)

const shuffle = (arr) => {
  let randomArr = [];
  let randomIndexes = [];
  while(randomArr.length !== arr.length){
    let randomIndex = Math.floor(Math.random() * arr.length);
    if(!randomIndexes.includes(randomIndex)){
      randomArr.push(arr[randomIndex])
      randomIndexes.push(randomIndex)
    }
  }
  console.log(randomArr)
  return randomArr;
};

//time: O(n)
//space: O(n)

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
