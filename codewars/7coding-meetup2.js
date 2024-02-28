function greetDevelopers(list) {
    list.forEach(developer => {
        developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
    })

    return list
}