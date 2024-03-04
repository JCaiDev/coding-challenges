const triangle = row => {
    let reduced = row.length > 1 ? '' :  row;
    for (let i = 0; i < row.length - 1; i+=1) {
        reduced += row[i] == row[i+1] ? row[i] : 'RGB'.replace(row[i], '').replace(row[i], '')
    }

    return reduced.length > 1 ? triangle(reduce) : reduced
}