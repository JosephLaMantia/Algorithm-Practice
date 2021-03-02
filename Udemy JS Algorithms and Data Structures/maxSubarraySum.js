function maxSubarraySum (arr, num){
    //create variables for the max sum and temp sum
    let maxSum = 0;
    let tempSum = 0;

    //check if array is smaller than num
    if(arr.length < num) {
        return null;
    }

    //grab first set of elements and add them together
    for(let i = 0; i < num; i++){
        maxSum += arr[i];   //set to maxsum
    }

    tempSum = maxSum;   //set tempsum to maxsum

    //iterate through array, starting at num
    for(let i = num; i < arr.length; i++){
        //set tempsum to the previous temp sum, minus the leftmost element, and plus the element to the right of it
        tempSum = tempSum - arr[i-num] + arr[i];
        //set maxsum to the max of maxsum and tempsum using math.max()
        maxSum = Math.max(maxSum,tempSum);
    }
    
    return maxSum;  //return maxsum

}

let arr = [1, 2, 3, 4, 5, 5, 7, 3, 4];
console.log(maxSubarraySum(arr, 3));
