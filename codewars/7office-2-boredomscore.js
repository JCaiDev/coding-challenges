function boredomScore(staff) {
    let map = {accounts:1,
    finance:2,
    canteen:10,
    regulation:3,
    trading: 6,
    change:6,
    IS:8,
    retail:5,
    cleaning:4,
    'pissing about':25
    }

    let score = Object.keys(staff).reduce((a, b)=> a+map[staff[b]],0 )

    return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}