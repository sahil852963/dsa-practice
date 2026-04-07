// Check the palindrome of a string

// noon
// level

// Case1
// function isPlindrome(str){
//     let reverse = str.split('').reverse().join("");
//     // console.log(reverse)
//     return str.toLowerCase() === reverse.toLowerCase();
// }

// const res = isPlindrome("noon");
// console.log(res);

// Case 2

// function isPalindrome(str){
//     let newStr = str.toLowerCase();
//     let left = 0;
//     let right = newStr.length - 1;
    
//     while(left < right) {
//         // console.log(left, right)
//         if(newStr[left] !== newStr[right]) return false;

//         left ++;
//         right--;
//     }
//     return true;
// }

// const res = isPalindrome("nooon");
// console.log(res);

// Case 3


// Palindrome number with edge case
// 101, 10 or -10

function isPalindrome(num){
    // console.log(num.toString().split("").reverse().join(""))
    return num < 0 ? false : (num === +num.toString().split("").reverse().join(""));
}

const res =isPalindrome(10);
console.log(res);