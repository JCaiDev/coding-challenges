function bump(x) {
    return (x.match(/n/g) || []).length > 15 ? 'Car Dead' : 'Woohoo!'

}