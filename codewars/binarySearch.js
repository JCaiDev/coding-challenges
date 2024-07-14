function binarySearch(list, item) {
    let left = 0
    let right = list.length - 1
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2)

        if (list[mid] === item) {
            return mid
        } else if (list[mid] < item ) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1

}

binarySearch([1, 2, 3, 5, 6, 8, 9 ,12, 16 ,29, 45, 47, 100], 90);

