// check if second string is an anagram of the first.

//Examples:
//'', '' //true
//'aaz''zza' //false
//'anagram', 'nagaram' //true
//'rat''car' //false
//'any''ya' //false

function validAnagram(str1, str2){

    //check if strings are the same length
    if(str1.length !== str2.length){
        return false;   //if not return false
    }

    //create frequencycounter objects for each string
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log("frequencyCounter1", frequencyCounter1);
    console.log("frequencyCounter2", frequencyCounter2);


    for(let key in frequencyCounter1){
        //check if keys match
        if(!(key in frequencyCounter2)){
            return false;   //if not, return false
        }

        //compare frequencies of characters between strings
        if((frequencyCounter1[key] !== frequencyCounter2[key])){
            return false;   //if not equal, return false
        }
    }
    return true; //if passes all checks, true
};

let str1 = "radar";
let str2 = "radra";

console.log(validAnagram(str1,str2));