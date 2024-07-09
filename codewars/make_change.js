// write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible y 5

// coin values: 5, 10 ,25

// input amount: 40, output # of coins: 3 (25, 10, 5)

// input: 35, output # of coins: 2 (25, 10)

// Brute Force Method / Greedy Method 

// add caching
const coins = [10, 6, 1]

const makeChange = (c) => {
    if (cache[c]) return cache[c]

    let minCoins = -1
    
    coins.forEach(coin => {
        if (c-coin >= 0) {
            let currMinCoins = makeChange(c - coin)
            if (minCoins === -1 || currMinCoins < minCoins) {
                minCoins = currMinCoins
            }
        } 
    })
    return minCoins + 1
}
