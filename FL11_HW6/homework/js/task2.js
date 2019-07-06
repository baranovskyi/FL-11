let firstSide = +prompt('enter value of the first side');
let secondSide = +prompt('enter value of the second side');
let thirdSide = +prompt('enter value of the third side');
if (firstSide > 0 && secondSide > 0 && thirdSide > 0) {
if (firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && thirdSide + firstSide > secondSide) {
    if (firstSide === secondSide && secondSide === thirdSide) {
            console.log('Eequivalent triangle');
        } else if (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide) {
            console.log('Isosceles triangle');
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }
} else {
    console.log('Triangle doesn’t exist');
}


