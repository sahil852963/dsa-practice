// Bubble sort 
// A sorting Algorithm where the largest values bubble up at the top 


function bubbleSort(arr) {
    let swapped = false;
    for(let i=arr.length; i>0; i--){
        console.log(i)
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

const res = bubbleSort([8,1,2,3,4,5,6,7]);
console.log(res);