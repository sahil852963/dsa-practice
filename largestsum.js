// [1,2,3,4,3,5,4,6,7,8] => total elem = 10
// Count largest sum of consecutive digits
// pair of num 4
// output 25

// conditions
// num > array => error message
// Total iteration  
// array.length - num + 1

function largestSum(array, num){
    if(num > array.length) {
        throw new Error ("Number should not be greater than the array");
    } else {
        let max = 0;
        for(let i=0; i< array.length - num + 1; i++) {
            let temp = 0;
            for(let j=0; j<num; j++){
                console.log('i '+ i + "j "+j)
                temp += array[i + j];
            }

            if(temp > max) {
                max = temp;
            }
        }
        return max;
    }
}

const result = largestSum([1,2,3,4,3,5,4,6,7,8], 2)
console.log(result)

