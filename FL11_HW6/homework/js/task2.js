let firstSide = +prompt('Enter first side');
let secondSide = +prompt('Enter second side');
let thirdSide = +prompt('Enter third side');
if ((firstSide && secondSide && thirdSide) > 0){
if ( firstSide < secondSide + thirdSide && secondSide < firstSide + thirdSide && thirdSide < firstSide + secondSide) {
		if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide) {
		console.log('Normal triangle');
		} else if (firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide) {
		console.log('Eequivalent triangle');
		} else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide) {
		console.log('Isosceles triangle');
		}  
	} else{
		console.log('Triangle doesn’t exist');
	}		
} else{
	console.log('Triangle doesn’t exist');
}

