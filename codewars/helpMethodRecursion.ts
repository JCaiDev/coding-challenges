
function collectOdds(arr : number[]) : number[] {
    let result: number[] = [];

    function helper(helperInput: number[]): void {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !==0) {
            result.push(helperInput[0])
        }
        console.log(`is ${helperInput[0]} odd`)
        helper(helperInput.slice(1))
    }

    helper(arr)

    return result
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9]))