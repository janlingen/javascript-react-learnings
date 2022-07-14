// non-built in
function addOrMultNumbers(x, y, z){
    if(z) {
        return x+y 
    } else {
        return x*y
    }
}
console.log(addOrMult(3,2,false))
console.log(addOrMult(3,2,true))

// some built in functions
var car = {
    wheels: 4,
    carName: "BMW",
}

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(car.carName.toLowerCase())
console.log(car.carName.toUpperCase())
// many more just look up with TAB