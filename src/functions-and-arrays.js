// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordArray) {
	let longestWord = "";

	if (wordArray.length === 0) {
		return null;
	}
	wordArray.forEach((word) => {
		if (word.length > longestWord.length) {
			longestWord = word;
		}
	});
	return longestWord;
}
console.log(findLongestWord(words));

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums) {
	if (nums.length === 0) {
		return 0;
	}
	let sum = 0;
	nums.forEach((num) => {
		sum += num;
	});
	return sum;
}
console.log(sumNumbers(numbers));
//Iteration 3.1
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(mixedArray) {
	let total = 0; 
	mixedArray.forEach((item) => {
		if(typeof item === "object") {
			throw new Error("Unsupported data type sir or ma'am") 
		}
		else if (typeof item === "string") {
			total += item.length;
		} else if (typeof item === "number" || typeof item === "boolean") {
		total += item; 
		}
	})
	return total;
}
console.log(sum(mixedArr));

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArray) {
	if (numArray.length === 0) {
		return null;
	}
	let ave = sumNumbers(numArray) / numArray.length;
	return ave;
}

console.log(averageNumbers(numbersAvg));

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordArray) {
	if (wordArray.length === 0) {
		return null;
	}
	let arrayLengths = [];
	wordArray.forEach((word) => {
		arrayLengths.push(word.length);
	});
	return averageNumbers(arrayLengths);
}
console.log(averageWordLength(wordsArr));

// Iteration #4.1
const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function avg(arr) {
	return arr.length === 0 ? null : Number((sum(arr)/arr.length).toFixed(2));
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
	if (array.length === 0) {
		return null;
	}
	let newArray = [];
	array.forEach((word) => {
		if (newArray.indexOf(word) === -1) {
			newArray.push(word);
		}
	});
	return newArray;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArray, wordToSearch) {
	if (wordsArray.length === 0 || wordToSearch.length === 0) {
		return null;
	}
	let wordFound = false;
	wordsArray.forEach((word) => {
		if (word === wordToSearch) wordFound = true;
	});
	return wordFound;
}
console.log(doesWordExist(wordsFind, "subset"));

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArray, wordToSearch) {
	if (wordsArray.length === 0 || wordToSearch.length === 0) {
		return 0;
	}
	let count = 0;
	wordsArray.forEach((word) => {
		if (word === wordToSearch) count++;
	});
	return count;
}

// Iteration #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

//finds the greatest horizontal or virtical product in the array
function greatestProduct(matrix){
	let maxProduct = 0;
	let testProduct = 1;
  
	for (let y = 0; y < matrix.length; y++){
		for (let x = 0; x < matrix[y].length; x++){
			if (x < matrix.length - 3){
				testProduct = matrix[y][x] * matrix[y][x + 1] * matrix[y][x + 2] * matrix[y][x + 3];
				maxProduct = Math.max(maxProduct, testProduct);
			}
			if (y < matrix.length - 3){
				testProduct = matrix[y][x] * matrix[y + 1][x] * matrix[y + 2][x] * matrix[y + 3][x];
				maxProduct = Math.max(maxProduct, testProduct);
			}
		}
	}
	return maxProduct;
}

  
  console.log(greatestProduct(matrix));
  
