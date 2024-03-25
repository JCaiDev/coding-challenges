function getAverageAge(list) {
    return Math.round(list.reduce((sum, obj)=> sum + obj.age) / list.length)
}