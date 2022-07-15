var test1 = 1
var test2 = 1

console.log("postfix")
console.log(test1++)
console.log(test1)
console.log(test1--)
console.log(test1)
console.log("prefix")
console.log(++test2)
console.log(--test2)

console.log(test1 == test2)
console.log(test1 != test2)
console.log(test1 < test2)
console.log(test1 <= test2)
console.log(test1 > test2)
console.log(test1 >= test2)

console.log(test1 == test1 && "jan" == "jan")
console.log(test1 == test2 || "jan" == "jan")