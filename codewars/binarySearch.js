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

binarySearch([2,6,7,90,103], 90);

