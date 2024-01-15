/**
 * @param: string
 * @return: integer
 * @example: abcdeff => 1 because f dupliactes
 */


function duplicateCount(text) {
    return (text.split('').sort().join('').match(/([^])\1+/g) || [] ).length;
}