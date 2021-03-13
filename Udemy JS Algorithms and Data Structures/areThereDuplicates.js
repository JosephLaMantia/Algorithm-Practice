function areThereDuplicates(...args) {
    //create array containing function input
    args.sort((a,b) => a > b);

    //create variables for two pointers for sliding window method
    let i = 0;
    let j = 1;

    //while j is less than the arrays length
    while(j < args.length){
        console.log('i', args[i]);
        console.log('j', args[j]);
        //compare the two indexes
        if(args[i] === args[j]){
            return true;    //if same, return true
        }

    //if different, move i and j to the right by one
    i++;
    j++;
    }    
    return false; //if loop completes, return false
}

console.log(areThereDuplicates('a','b','c','a'));