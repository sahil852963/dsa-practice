// Find the maximum occurring character in a string ?

function MaxOccuringString(str){
    // console.log(str.split(''));
    let map = {};
    str.split('').forEach(elem => {
        // console.log(elem);
        map[elem] = map[elem] ? map[elem] + 1 : 1;
    });
    // console.log(map);

    let max = 1;
    let char = str[0];
    for(let k in map){
        console.log(k)
        if(map[k] > max){
            max = map[k];
            char = k;
        }
    }
    return char;
}

const res = MaxOccuringString("Hello Worlds");
console.log(res);