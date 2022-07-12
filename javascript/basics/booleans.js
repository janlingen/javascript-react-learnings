var isDriving = true
var hasPassanger = true

console.log(isDriving)
console.log(!hasPassanger)

if(isDriving) {
    if(hasPassanger){
        console.log("car is driving")
    }
    else {
        console.log("car cant drive without passanger")
    }
} else {
    console.log("car is not driving")
}