// base case 
// the condition when the recursion ends
// this is the most important concept to understand
// Different Input

function countDown(num) {
    if (num <= 0) {
        console.log('all done!')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(10)