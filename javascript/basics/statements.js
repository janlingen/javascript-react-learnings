// if
var bool1 = true
var bool2 = false
 
if (bool1) {
    console.log('if1')
} else if (!bool2) {
    console.log('if2')
} else {
    console.log('if3')
}

// else if
var bool1 = false
var bool2 = false
 
if (bool1) {
    console.log('if1')
} else if (!bool2) {
    console.log('if2')
} else {
    console.log('if3')
}

// else
var bool1 = false
var bool2 = true
 
if (bool1) {
    console.log('if1')
} else if (!bool2) {
    console.log('if2')
} else {
    console.log('if3')
}

// ternary if 1
var bool = true
console.log(bool ? 'ternary1' : 'ternary2');

// ternary if 2
var bool = false
console.log(bool ? 'ternary1' : 'ternary2');

// switch 1
var car = 'BWM';

switch(car) {
    case "BWM":
        console.log('Awesome');
        break;
    case "LAMBO":
        console.log('Very nice');
        break;
    default:
        console.log('Unknown');
}

// switch 2
var car = 'LAMBO';

switch(car) {
    case "BWM":
        console.log('Awesome');
        break;
    case "LAMBO":
        console.log('Very nice');
        break;
    default:
        console.log('Unknown');
}
