// const allows no Reassignment
const test1 = "hello world" // string immutable
const test2 = {} // object mutable

test2["carModel"] = "BMW"

console.log(test1)
console.log(test2)