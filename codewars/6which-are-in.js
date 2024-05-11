function inArray(array1, array2) {
    return array1
        .filter(a1=> array2.includes(a1))
        .sort()
}