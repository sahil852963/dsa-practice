// arr = [1,2,3,4,5,6]

function makeIterator(start = 0, end = Infinity, step){
    let nextstart = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if(iterationCount < end) {
                result = { value:nextstart, done: false };
                iterationCount ++;
                nextstart += step;
                return result;
            }
            return { value: iterationCount, done: true};
        }
    }
}

let iteratior = makeIterator(5, 10, 2);
let result = iteratior.next();

while(!result.done) {
    console.log(result.value);
    result = iteratior.next();
}