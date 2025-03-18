function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let count1 = {};
  let count2 = {};
  for(let num of arr1) {
    count1[num] = (count1[num] || 0) + 1;
  }
  for(let num of arr2) {
    count2[num] = (count2[num] || 0) + 1
  }
  for(let key in count1) {
    let squared = key ** 2;
    if(!squared in count2) return false;
    if(count1[key] !== count2[squared]) return false;  
  }
  return true;
}

// console.log(same([1,2,3,4], [9,4,16,1]));
// console.log(same([5,2,3,4], [9,4,16,25]));
// console.log(same([1,3,5,2], [1,1,9,25]));

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count1 = {};
  let count2 = {};
  for(let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    count1[char1] = (count1[char1] || 0) + 1
    count2[char2] = (count2[char2] || 0) + 1
  }
  for(key in count1) {
    if (count1[key] !== count2[key]) return false;
  }
  return true;
}

// console.log(anagrams(" ", " "))
// console.log(anagrams("aaz", "zza"))
// console.log(anagrams("anagram", "nagaram"))
// console.log(anagrams("rat", "car"))
// console.log(anagrams("awesome", "awesom"))
// console.log(anagrams("qwerty", "qeywrt"))
// console.log(anagrams("texttwisttime", "timetwisttext"))

function maxSubarraySum(array, n) {
  let maxSum = 0;
  let tempSum = 0;
  if(array.length < n) return null;
  for(let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for(let i = n; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
// console.log(maxSubarraySum([4,2,1,6], 1))
// console.log(maxSubarraySum([4,2,1,6,2], 4))
// console.log(maxSubarraySum([], 4))

function sameFrequency(num1, num2){
  let str1 = num1.toString();
  let str2 = num2.toString();
  if(str1.length !== str2.length) return false;
  let count = {};
// good luck. Add any arguments you deem necessary.
for(let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    count[char1] = (count[char1] || 0) + 1;
    count[char2] = (count[char2] || 0) - 1;
}
return Object.values(count).every(freq => freq === 0);
}

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let count = {};
  for(let arg of args) {
    count[arg] = (count[arg]|| 0) + 1;
  }
  return Object.values(count).some(value => value > 1)
}

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 

function constructNote(message, letters){
  // add whatever parameters you deem necessary - good luck!
  let count = {};
  for(let char of message) {
    count[char] = (count[char] || 0) + 1;
  }
  for(let char of letters) {
    count[char] = (count[char] || 0) - 1;
  }
  return Object.values(count).every(val => val <= 0)
}

// console.log(constructNote('aa', 'abc')) // false
// console.log(constructNote('abc', 'dcba')) // true
// console.log(constructNote('aabbcc', 'bcabcaddff')) // true

function findAllDuplicates(array){
  // add whatever parameters you deem necessary - good luck!
  let count = {};
  let result = [];
  for(let digit of array) {
    count[digit] = (count[digit] || 0) + 1;
  }
  for(let digit in count) {
    if (count[digit] > 1) result.push(parseInt(digit))
  }
  return result;
}

// console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
// console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1

function averagePair(array, targetAvg){
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let currAvg = (array[i] + array[j]) / 2
    if(currAvg === targetAvg) return true;
    if(currAvg < targetAvg) i++;
    if(currAvg > targetAvg) j--;
  }
  return false;
}

// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

function isSubsequence(sub, full) {
  // good luck. Add any arguments you deem necessary.
  let i = 0;
  let j = 0;
  while(j <= full.length) {
    if(i === sub.length) return true;
    let fullChar = full[j];
    let subChar = sub[i];
    if(subChar === fullChar) i++
    j++
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

function findPair(array, n) {
  let count = {};
  for(let num of array) {
      count[num] = (count[num] || 0) + 1;
  }
  for(let num in count) {
      let complement = n + parseInt(num);
      if(count[complement] > 0) return true;
  }
  return false;
}

// console.log(findPair([6,1,4,10,2,4], 2)) // true
// console.log(findPair([8,6,2,4,1,0,2,5,13],1)) // true
// console.log(findPair([4,-2,3,10],-6)) // true
// console.log(findPair([6,1,4,10,2,4], 22)) // false
// console.log(findPair([], 0)) // false
// console.log(findPair([5,5], 0)) // true
// console.log(findPair([-4,4], -8)) // true
// console.log(findPair([-4,4], 8)) // true
// console.log(findPair([1,3,4,6],-2)) // true
// console.log(findPair([0,1,3,4,6],-2)) // true

function maxSubarraySum(array, n){
  // add whatever parameters you deem necessary - good luck!
  if(array.length < n) return null;
  let maxSum = -Infinity;
  let tempSum = 0;
  for(let i = 0; i < n; i++) {
    tempSum += array[i];
  }
  maxSum = Math.max(tempSum, maxSum);
  for(let i = n; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null

function minSubArrayLen(array, n) {
  
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0