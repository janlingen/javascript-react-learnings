var car = {
    wheels: 4,
    carName: "BMW",
    seats: 5,
    doors: 5,
    produced: {isProduced: true, 
        productionDate: new Date(2022,1,1).toJSON()}
}

console.log(Object.keys(car))
console.log(Object.values(car))

console.log(car)
console.log(car.carName)
console.log(car.produced)
console.log(car.produced.isProduced)
