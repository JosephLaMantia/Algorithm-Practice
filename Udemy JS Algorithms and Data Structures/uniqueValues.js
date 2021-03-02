// from a sorted array of integers, count how many unique values there are

function uniqueValues (arr){
    //create two pointers
    //point one to first index, then to second index.
    if(arr.length === 0) {
        return 0;
    }
    let i = 0;
    let j = 1;

    while(j < arr.length){
        //compare the two indexes
        if(arr[j] === arr[i]){  //if same, move j forward
            j++;
        }
        if(arr[j] !== arr[i]){  //if different move i forward and set the element at i to  the element at j
            i++;
            arr[i] = arr[j];
        }
    }
    
    return i;   //return i when j hits end of array
}

let arr = [-1, 0, 0, 1, 2, 3, 3, 4];
console.log(uniqueValues(arr));