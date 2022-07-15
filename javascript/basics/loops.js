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

console.log("-----------")

var test1 = 1
while(test1 <= 5){
    console.log(test1++)
}

console.log("-----------")

var test2 = false

do{ console.log("done")
} while(test2)

console.log("-----------")

var test3 = 1
while(test3 <= 5){
    if(test3 == 2){
        test3 += 1
        continue
    }
    if(test3 == 4){
        break
    }
    console.log(test3++)
}

