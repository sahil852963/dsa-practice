// generator function
// Generator functions in javascript are a special type of functions that can pause and resume execution using yielld  

// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log("function called");
// }

// function* number(){
//     let i=1;

//     while(true){
//         yield i++;
//     }
// }


// let res = number();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

function* fruits(){
    yield 'Apple';
    yield 'Banana';
    yield 'Guava';
    yield 'Papaya';
    yield 'Grapes';
}

for(let fruit of fruits()){
    console.log(fruit);
}