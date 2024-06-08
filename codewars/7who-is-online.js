function whoseOnline (friends) {
    let output = {}
    friends.forEach(friend=> {
        let status = friend.status
        if(status === 'online' && friend.lastActivity > 10 ) {
            status = 'away'
        }
        let temp = output[status];

        if (output[status]) {
            output[status].push(friend.username)
        } else {
            output[status] = [friend.username]
        }
    })
    return output
}

