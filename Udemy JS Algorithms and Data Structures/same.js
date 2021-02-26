// Checks to see if arr2 contains all the squares of the nums in arr1, and if they have the same frequency

//Example: input: [1, 2, 3],[1, 9, 4] output: true
//Example: input: [1, 2, 4],[1, 4, 4] output: false
//Example: input: [1, 2], [1, 4, 9] output: false

function same(arr1, arr2){
    //check to see if lengths are equal
    if (arr1.length !== arr2.length){
        return false;
    }

    //create to frequencyCounter objects, checking frequency of each number in respective arr's
    frequencyCounter1 = {};
    frequencyCounter2 = {};

    for(let val of arr1){   //creates object with frequency of arr1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){   //creates object with frequency of arr2
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log("frequencyCounter1", frequencyCounter1);
    console.log("frequencyCounter2", frequencyCounter2);

    //For each key in arr1
    for(let key in frequencyCounter1){
        //check if arr2 has keys that are equal to arr1's keys^2
        if(!(key ** 2 in frequencyCounter2)){
            return false;   //if not return false
        }
        //check if they have the same frequency
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;    //if not return false
        }
    }
    return true;    //return true if passes all checks
}

arr1 = [1, 2, 3];
arr2 = [1, 4, 9];

console.log(same(arr1,arr2));