// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   let count1 = {};
//   let count2 = {};
//   for(let num of arr1) {
//     count1[num] = (count1[num] || 0) + 1;
//   }
//   for(let num of arr2) {
//     count2[num] = (count2[num] || 0) + 1
//   }
//   for(let key in count1) {
//     let squared = key ** 2;
//     if(!squared in count2) return false;
//     if(count1[key] !== count2[squared]) return false;  
//   }
//   return true;
// }

// console.log(same([1,2,3,4], [9,4,16,1]));
// console.log(same([5,2,3,4], [9,4,16,25]));
// console.log(same([1,3,5,2], [1,1,9,25]));

// function anagrams(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let count1 = {};
//   let count2 = {};
//   for(let i = 0; i < str1.length; i++) {
//     let char1 = str1[i];
//     let char2 = str2[i];
//     count1[char1] = (count1[char1] || 0) + 1
//     count2[char2] = (count2[char2] || 0) + 1
//   }
//   for(key in count1) {
//     if (count1[key] !== count2[key]) return false;
//   }
//   return true;
// }

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

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))
console.log(maxSubarraySum([4,2,1,6], 1))
console.log(maxSubarraySum([4,2,1,6,2], 4))
console.log(maxSubarraySum([], 4))