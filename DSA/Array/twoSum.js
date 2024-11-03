// //Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//     it("Should implement two sum", () => {
//      assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//     });
//    });

// @param nums: number[]
// @param target: number
// @return number[][]
// edge cases: [], "target"

function leonTwoSum(nums, target) {
  //created hashmap of the value : index
  let map = {};

  let answer = [];
  // answer set in an array of number pairs

  for (let i = 0; i < nums.length; i++) {
    const diff = +target - nums[i];
    if (diff in map && map[diff] !== i) {
      answer.push([nums[i], diff]);
    } else {
      map[nums[i]] = i;
    }
  }
  return answer;
}

testNums = [1, 1, 1, 1, 1];
target = 2;

console.log(leonTwoSum(testNums, target));

// time complexity O(n)
// space complexity O(n)

// PREP
// param nums: number[], target: num
// return number[] or [index, index]
// examples: target is 7
// nums = [1, 2, 3, 4, 5] @return [2, 3]

function twoSum(nums, target) {}
