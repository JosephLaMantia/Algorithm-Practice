//coding challenge for zocdoc that I couldn't figure out in time.
//given an array of strings, remove the second occurrence of any anagrams and then return a sorted array

function anagramFilterAndSort(text){

    //case where array is empty
    if(text.length === 0){
        return text;
    }

    let removed = [];

    for(let i = 0; i < text.length - 1; i++){
        let j = i + 1;

        while(j <= text.length){
            let result = validAnagram(text[i],text[j]);
            console.log(i, j, result)
            if(result === true){
                console.log(text)
                removed = text.splice(j, 1);
                console.log(text)
            }
            j++;
        }
    }
    

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
}

let text = ['code', 'anagram', 'angaram', 'doce', 'code', 'run'];
console.log(anagramFilterAndSort(text));