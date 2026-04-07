// String Anagram
// "sahil" => "shail"
// Condition

// Length of both string
// String "Sahil"
// {h:1,s:1,a:1,i:1,l:1}
// {h:0,s:0,a:0,i:0,l:0}

// Case 1
// function isAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;

//     let counter = {};
//     for(let letter of str1){
//         // console.log(letter)
//         counter[letter] = (counter[letter] || 0) + 1;
//         // console.log(counter)
//     }

//     for(let item of str2){
//         if(!counter[item]){
//             // console.log("not found")
//             return false;
//         } 

//         counter[item] -=1;
//         // console.log(counter)
//     }
//     return true;
// }


// Case 2
// function isAnagram(str, str2){
//     if(str.length !== str2.length) return false;
//     let s = str.toLowerCase().split("").sort().join("");
//     let t = str2.toLowerCase().split("").sort().join("");
//     // console.log(str.toLowerCase().split("").sort().join(""));
//     return s === t;
// }


// Case 3
function isAnagram(str, str2){
    if(str.length !== str2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(let i=0; i<str.length; i++){
        obj1[str[i]] = (obj1[str[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for(let item in obj1) {
        if(obj1[item] !== obj2[item]) return false;
    }

    return true;
}

const isAnagramCheck = isAnagram("safhil", "shail");
console.log(isAnagramCheck)