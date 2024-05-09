function createPhoneNumber(num) {
    let format = "(xxx) xxx-xxxx"

    for (let i = 0; i< num.length; i++) {
        format = format.replace('x', numbers[i])
    }

    return format
}