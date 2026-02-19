// String Anagram
// "sahil" => "shail"
// Condition

// Length of both string
// String "Sahil"
// {h:1,s:1,a:1,i:1,l:1}
// {h:0,s:0,a:0,i:0,l:0}

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;

    let counter = {};
    for(let letter of str1){
        // console.log(letter)
        counter[letter] = (counter[letter] || 0) + 1;
        // console.log(counter)
    }

    for(let item of str2){
        if(!counter[item]){
            // console.log("not found")
            return false;
        } 

        counter[item] -=1;
        // console.log(counter)
    }
    return true;
}

const isAnagramCheck = isAnagram("sahitl", "shaill");
console.log(isAnagramCheck)