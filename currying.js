function discount(percent){

    return function(price){

        return price - (price * percent / 100);

    }

}

const tenPercent = discount(10);

console.log(tenPercent(1000));
console.log(tenPercent(5000));