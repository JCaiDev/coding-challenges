function orderFood(list) {
    let orders ={}
    list.forEach(dev => {
        if (orders[dev.meal]) {
            orders[dev.meal]++
        } else {
            orders[dev.meal] = 1
        } 

    })
    return orders
}