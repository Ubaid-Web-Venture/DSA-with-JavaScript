/*
//  Left Rotation by 1
let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr); // [2, 3, 4, 5, 1]

//  Right Rotation by 1
arr = [1, 2, 3, 4, 5];
copy = arr[arr.length - 1];
for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr); // [5, 1, 2, 3, 4]

//  Nested Loop Example
for (let j = 1; j <= 4; j++) {
  console.log(j + " execution ");
  for (let i = 1; i <= 3; i++) {
    console.log("hello");
  }
}

//  Left Rotation by k (O(n^2))
arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter k value"));
k = k % arr.length;
for (let j = 0; j < k; j++) {
  let copy = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy;
}
console.log(arr);

//  Right Rotation by k (O(n^2))
arr = [1, 2, 3, 4, 5];
k = Number(prompt("Enter k value"));
k = k % arr.length;
for (let j = 0; j < k; j++) {
  let copy = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = copy;
}
console.log(arr);

//  Right Rotation by k using Extra Space
arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
k = Number(prompt("Enter k value"));
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
  temp[(i + k) % arr.length] = arr[i];
}
console.log(temp);

//  Left Rotation by k using Extra Space
arr = [1, 2, 3, 4, 5];
temp = new Array(arr.length);
k = Number(prompt("Enter k value"));
k = k % arr.length;
for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length];
}
console.log(temp);

//  Left Rotation by k Without Extra Space (Reverse method)
arr = [1, 2, 3, 4, 5];
k = Number(prompt("Enter k value"));
k = k % arr.length;
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);
console.log(arr);

//  Right Rotation by k Without Extra Space (Reverse method)
arr = [1, 2, 3, 4, 5];
k = Number(prompt("Enter k value"));
k = k % arr.length;
reverse(0, arr.length - 1);
reverse(0, k - 1);
reverse(k, arr.length - 1);
console.log(arr);

//  Reusable Reverse Function
function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

// Remove duplicates from the sorted array

var removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  return j;
};

// Pehle array define karein
let nums = [1, 1, 2, 2, 3, 3, 4];

// Function ko call karke length lein
let length = removeDuplicates(nums);

// Ab console me output print karwaen
console.log(nums.slice(0, length)); // Output: [1, 2, 3, 4]

// merge sorted array
let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];
let merge = new Array(arr1.length + arr2.length);
let i = 0;
let j = 0;
let k = 0;
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merge[k++] = arr1[i++];
  } else {
    merge[k++] = arr2[j++];
  }
}
while (j < arr2.length) {
  merge[k++] = arr2[j++];
}
while (i < arr1.length) {
  merge[k++] = arr1[i++];
}
console.log(merge);

// Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    let profit = prices[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

// Sort Color
let arr = [2, 0, 1, 2, 1, 0, 2, 0, 1]; // Blue, Green, Red
let j = 0; // Position for Red (1)
let k = arr.length - 1; // Position for Blue (2)

let i = 0;

while (i <= k) {
  if (arr[i] === 0) {
    // Green (0): swap with arr[j], then move i and j forward
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j++;
  } else if (arr[i] === 2) {
    // Blue (2): swap with arr[k], then move k backward only
    [arr[i], arr[k]] = [arr[k], arr[i]];
    k--;
  } else {
    // Red (1): move i forward
    i++;
  }
}

console.log(arr);

//Maximum Subarrray / Kadane's Algorithm
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};
console.log(maxSubArray(nums));

// Majority Element / Moore's voting algo
nums = [2, 2, 1, 1, 1, 2, 2];
var mjorityElement = function (nums) {
  let ans = nums[0];
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      ans = nums[i];
      count = 1;
    } else if (ans == nums[i]) count++;
    else count--;
  }
  return ans;
};
console.log(majorityElement(nums)); // Output: 2


// Trapping Rain Water
height = [4, 2, 0, 3, 2, 5];
var trap = function (height) {
  let left = new Array(height.length);
  let right = new Array(height.length);
  let maxLeft = height[0],
    maxRight = height[height.length - 1];
  (left[0] = maxLeft), (right[right.length - 1] = maxRight);
  for (let i = 1; i < height.length; i++) {
    maxLeft = Math.max(height[i], maxLeft);
    left[i] = maxLeft;
  }
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight = Math.max(height[i], maxRight);
    right[i] = maxRight;
  }
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    ans += Math.min(left[i], right[i]) - height[i];
  }
  return ans;
};
console.log(trap(height)); // Output: 9
*/
