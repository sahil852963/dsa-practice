// generator function

function* generator(){
    yield 1;
    yield 2;
    yield 3;
    console.log("function called");
}

let res = generator();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());