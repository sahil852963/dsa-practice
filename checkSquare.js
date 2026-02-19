// Checking square in another array
// arr1=[1,2,3,4,5], arr2=[1,4,6,16,25];


// function isSquareCheck(arr1, arr2){
//     for(let i=0; i < arr1.length; i++){
//         let isSquare = false;
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] * arr1[i] === arr2[j]){
//                 isSquare = true;
//             }

//             if(j === arr2.length - 1){
//                 if(!isSquare) return false;
//             }
//         }
//     }
//     return true;
// }




// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}
function isSquareCheck2(arr1, arr2){
    let map1 = {};
    let map2 = {};
    for(let item of arr1){
        map1[item] = (map1[item] || 0) + 1;
    }

    for(let item2 of arr2){
        map2[item2] = (map2[item2] || 0) + 1;
    }
    // console.log(map2);
    for(let key in map1){
        // console.log(key)
        if(!map2[key*key]){
            return false;
        }

        if(map1[key] !== map2[key * key]){
            return false;
        }
    }
    return true;
} 

const result = isSquareCheck2([1,2,4,2], [1,4,4,16]);
console.log(result)