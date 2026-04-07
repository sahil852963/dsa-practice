// Linear Search
// [1,2,4,3,8,7,6,5,9,10]


function linearSearch(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === val){
            return true;
        }
    }
    return false;
}

const result = linearSearch([1,2,4,3,8,7,6,5,9,10], 17)
console.log(result) 
