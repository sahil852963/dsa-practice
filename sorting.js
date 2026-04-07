// Sorting using Recursive Function
// [2,3,1,4] 
// [2,1,3,4]  Case 1
// [1,2,3,4] Output

let myArray = [];
let i=0;
let j=1;

function isSort(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

function sortCheck(arr){
    if(isSort(arr)){
        myArray = arr;
        return;
    } else if (arr[i] < arr[j]){
        i++;
        j++;
        sortCheck(arr);
    } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i=0;
        j=1;
        sortCheck(arr);
    }
}

sortCheck([2,3,1,4]);
console.log(myArray);


