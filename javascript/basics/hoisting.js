for (var i=0; i <= 5; i++){
    console.log(i)
}
console.log(
    "expect that i is not avaliable" +
    "but it is due to hoisting: " + i)

// let avoids hoisting/reordering
for (let x=0; x <= 5; x++){
        console.log(x)
}