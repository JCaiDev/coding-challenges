function minimumSteps(numbers, value){
    let nums = numbers.sort((a, b)=> a-b)
    let sum = 0
    for (let i = 0; i<=nums.length; i++) {
      sum += nums[i]
      if (sum >= value) {
        return i
      }
    }
}