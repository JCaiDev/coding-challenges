function twoSum(nums, target){
    let seen = new Map()
    for (let i = 0; i<nums.length; i++){
        let value = nums[i], diff = target - nums[i]
        if (seen.has(diff))
            return [seen.get(diff), i]
        seen.set(value, i)
    }
}

/* [2, 3, 4, 6] target = 10

hashmap = {2: 0,
           3: 1,
           4: 2,
           }

value = 6
diff = 4

return [2, 3] */