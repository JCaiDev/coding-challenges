function minimumNumber(numbers){
    let sum = numbers.reduce((a, b) => a + b, 0)
    for (let i = sum; ; i++) {
        if (prime(i)) return i - sum
    }
    
    function prime(a) {
        if (a < 2 ) {
            return false
        }
        
        if (a % 2 === 0) {
            return a === 2
        }
        
        for (let i = 3; i*i < a; i += 2) {
            if (a % i === 0) return false
        }
    
        return true
    }
}