//finds first pair of integers where the sum is 0.
//accepts sorted array of integers.
//returns that pair, or undefined if DNE (no return)

function sumZero (arr) {
    //create pointers for the left and rightmost elements of arr
    let left = 0;
    let right = arr.length - 1;

    //while the left is smaller than right
    while(left < right){
        //create sum variable = left + right
        let sum = arr[left] + arr[right];
        console.log("left", arr[left], "right", arr[right], "sum", sum);
        //check if sum = 0
        if(sum === 0){  //if so, return that pair
            return [arr[left], arr[right]];
        } else if (sum > 0){    //if > 0, decrement right (moving it one space to the left)
            right--;
        } else {    //else, increment left (moving it one space to the right)
            left++;
        }
    }    
}

let arr = [-5,-4,-3,1,3,10,9]

console.log(sumZero(arr));