// write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible y 5

// coin values: 5, 10 ,25

// input amount: 40, output # of coins: 3 (25, 10, 5)

// input: 35, output # of coins: 2 (25, 10)

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b-a)
    let coinTotal = 0
    let i = 0
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i]
            coinTotal++
        } else {
            i++
        }
    }
    return coinTotal
}

// Brute Force Method / Greedy Method

const makeChangeBruteForce = (value) => {
    if (value === 0) return 0
    let minCoins
    coins.forEach(coin => {
        if (value-coin >= 0) {
            let currMinCoins = makeChangeBruteForce(value - coin)
            if (minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins
            }
        } 
    })
    return minCoins + 1
}
