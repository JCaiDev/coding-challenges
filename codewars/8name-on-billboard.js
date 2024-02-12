function billboard(name, price = 30){
    let totalCost = 0
    
    for (let i = 0; i<name.length; i++) {
      totalCost += price
    }
    
    return totalCost
  } 

// or

function billboard( name, price = 30) {
    return name.split('').reduce((sum, letter)=> sum  + price, 0)
}