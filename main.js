// display in the console the numbers from 1 to 20
console.log('1. The numbers from 1 to 20');

for(let i = 1; i <= 20; i++) {
    console.log(i);
}

// display in the console the odd numbers from 1 to 20
console.log('2. The odd numbers from 1 to 20');
for(let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// compute the sum of the elements of an array and display it in the console
console.log('3. The sum of the elements of an array');
function sum(arr) {
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

let myArr = [15, -5, 5, 0, 100, 2277, 13.3, 5, 45, 5];
console.log('Sum = ' + sum(myArr));

// compute the maximum of the elements of an array and display it in the console 
console.log('4. The maximum of the elements of an array');
function max(arr) {
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log('Maximum = ' + max(myArr));

// compute how many times a certain element appears in an array
console.log('5. How many times a certain element appears in an array');
function smth(x, arr) {
    let contor = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x) {
            contor +=1;
        }
    }

    return contor;
}


console.log('How many times, 5,  appears in myArr: ' + smth(5, myArr));
let anArr = [4, 'g', 67, 'k', 'l' ,'g', 579, 'g', 4568, 'g', 546, 'g']
console.log('How many times, g, appears in anArr: ' + smth('g', anArr));


// Challenge
console.log('6. Challenge');
function challenge() {
    var matrix = [];
    for(let i = 0; i < 4; i++) {
        matrix[i] = [];
        for(let j = 0; j < 4; j++) {
            if ( (i == j) || (i - j == 2) || (j - i == 2)) {
                matrix[i][j] = 0 ;
            } else {
                matrix[i][j] = 1;
            }
        }
    } 

    return matrix;
}


console.log(challenge());