// function bankAccount(){
//     let balance = 500;

//     return {
//         deposit(amount){
//             balance += amount;
//         },
//         getBalance(){
//             return balance;
//         }
//     }
// }

// let account = bankAccount();
// account.deposit(600);
// console.log(account.getBalance());


function message(){
    let text = "Hello World";
    setTimeout(() => {
        console.log(text);
    }, 3000);
}

message();