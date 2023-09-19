// 两数和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

function twoSum(nums: number[], target: number): number[] {
  console.log("数据", nums, target)
  for (let i = 0; i < nums.length; i++) {
    const elementI = nums[i];
    for (let j = i+1; j < nums.length; j++) {
      const elementJ = nums[j];
      if(elementI + elementJ === target){
        console.log("数据", elementI, elementJ)
        return [i, j]
      }
    }
  }
};

// 效率 时间
// 详情    内存
// 108ms   41.58MB
// 击败 24.83%使用 TypeScript 的用户   击败 94.40%使用 TypeScript 的用户

// 优化1

function twoSum2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let num2 = target - nums[i]
    let index = nums.findIndex((item,index) => {
      return item === num2 && index !== i
    })
    if(index !== -1){
      console.log(nums[i], nums[index])
      return [i,index]
    }
  }
};

// 效率
// 时间   内存
// 608ms   43.13MB
// 击败 5.09%使用 TypeScript 的用户    击败 64.34%使用 TypeScript 的用户
// 这优化了个锤子

// console.log("结果",twoSum([2,7,11,15], 9))
console.log("结果",twoSum2([3,2,4], 6))
