// Divide and Conqure Technique
// find the index of given no. in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index = 6 Output

// Condition 
// number = 7
// min = 0, elem = 1
// max = array.length-1, elem = 15
// midIndex = (min+max)/2 => (0+14)/2 => 7
// array[7] => 8
// array[midIndex] > number
// max = minIndex-1
// array[midIndex] < number
// min = midIndex+1
// midIndex

function findIndex(array, num){
    if(array.length > 0) {
        let min = 0;
        let max = array.length - 1;
        // max = 5
// min = 4
// mid = 5
// [5,6,7]
        while(min <= max){
            let midIndex = (min+max) / 2;
            console.log('min', min)
            console.log('max', max)
            console.log((min+max) / 2)
            console.log('array[midIndex] ',array[midIndex])
            if(array[midIndex] < num) {
                min = midIndex + 1;
                // console.log("less than num");
            } else if(array[midIndex] > num){
                max = midIndex - 1;
                // console.log("greater than num")
            } else {
                return midIndex;
            }
        }
    }
}

const result = findIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 9);
console.log(result);

