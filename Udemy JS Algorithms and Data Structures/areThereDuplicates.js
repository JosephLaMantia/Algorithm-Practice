function areThereDuplicates(...args) {
    //create an object to store args
    let myObj = {};

    //for-in loop to store args into obj
    for(let val in args){   //if arg exists, add 1 to value. if not, create it and set val to 1.
        myObj[args[val]] = (myObj[args[val]] || 0) + 1;
    }
    console.log('myObj', myObj);
    //for-in loop through obj to check if any value is greater than 1. if so, return true.
    for(let key in myObj){
        if(myObj[key] > 1){
            return true;
        }
    }

    return false;   //return false
}

//------------------------------------------------ tried pointer method (would need a way to sort character arguments)
// function areThereDuplicates(...args) {
//     //create array containing function input
//     args.sort((a,b) => a > b);

//     //create variables for two pointers for sliding window method
//     let i = 0;
//     let j = 1;

//     //while j is less than the arrays length
//     while(j < args.length){
//         console.log('i', args[i]);
//         console.log('j', args[j]);
//         //compare the two indexes
//         if(args[i] === args[j]){
//             return true;    //if same, return true
//         }

//     //if different, move i and j to the right by one
//     i++;
//     j++;
//     }    
//     return false; //if loop completes, return false
// }

console.log(areThereDuplicates('a','b','c','d'));