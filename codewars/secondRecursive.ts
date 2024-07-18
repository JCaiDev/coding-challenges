function sumRange( num: number) : number {
    if (num === 1) return 1
    console.log(num)
    return num + sumRange(num-1)
}

sumRange(10)