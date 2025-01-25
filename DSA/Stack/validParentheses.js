class Solution {
  isValid(s) {
    const stack = [];
    const closeToOpen = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let char of s) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        if (stack.pop()! !== closeToOpen[char]) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
