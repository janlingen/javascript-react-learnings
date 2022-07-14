// basic for loop
for(var i =0; i <= 3; i++){
    console.log(i)
}

var arr = ["hello", "world"]

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

console.log("-----------")

for (const value of arr) {
    console.log(value)
}

console.log("-----------")

arr.forEach(function(name) {
    console.log(name)
})