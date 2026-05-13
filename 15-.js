let arr0 = [6, 5, 8, 2, 1, 4, 3, 7];
let i = 0;
while (i < arr0.length) {
  let correctIdx = arr0[i] - 1;
  if (arr0[i] != arr0[correctIdx]) {
    let temp = arr0[i];
    arr0[i] = arr0[correctIdx];
    arr0[correctIdx] = temp;
  } else {
    i++;
  }
}
console.log(arr0);

let nums = [0, 1, 3];

while (i < nums.length) {
  let correctIdx = nums[i];
  if (nums[i] < nums.length && nums[i] != nums[correctIdx]) {
    let temp = nums[i];
    nums[i] = nums[correctIdx];
    nums[correctIdx] = temp;
  } else {
    i++;
  }
  for (let j = 0; j < nums.length; j++) {
    if (j != nums[j]) return j;
  }
  return nums.length;
}
console.log(nums.length);
