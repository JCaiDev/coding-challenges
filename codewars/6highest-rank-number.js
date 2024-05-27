function highestRank(arr) {
    let obj = {}
    arr.forEach(num => {
        if (obj[num] === undefined) {
            obj[num] = 0
        }
        obj[num]++
    })

    let nums = Object.keys(obj)
    let maxCount = 0, maxNum

    nums.forEach(num => {
        if (obj[num] >= maxCount) {
            maxCount = obj[num]
            maxNum = num
            }
        }
    )

    return parseInt(maxNum)


}