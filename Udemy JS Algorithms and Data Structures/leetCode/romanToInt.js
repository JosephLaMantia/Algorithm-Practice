//"MCMXCVI"
//Get total.
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s) => {
    
    //Cover basic roman numeral meanings
    //Create object with numerals as keys, and their values
    
    let numerals = {};
    numerals['I'] = 1;
    numerals['V'] = 5;
    numerals['X'] = 10;
    numerals['L'] = 50;
    numerals['C'] = 100;
    numerals['D'] = 500;
    numerals['M'] = 1000;
    
    let pairs = {};
    numerals['IV'] = 4;
    numerals['IX'] = 9;
    
    numerals['XL'] = 40;
    numerals['XC'] = 90;
    
    numerals['CD'] = 400;
    numerals['CM'] = 900;
    
    //create pointers to check two elements at once.
    let left = 0;
    let right = 1;
    
    let total = 0; //track total
    
    while(right < s.length){
        
        let pair = [s[left], s[right]].join('');
        console.log('pair were checking:', pair)
        
        let checker = false;
        for(let key in numerals){
            if(pair === key){
                console.log('pair = key')
                total += numerals[key];
                checker = true;
                left += 2;
                right += 2;
            };
        }
        
        if(!checker){
            console.log('pair != key')
            total += numerals[s[left]];
            left++;
            right++;
        }
        
        console.log('total:', total);
        
        checker = false;
        
    }
    
    //if last numeral is not in a pair:
    if((right - 1) === s.length - 1){
            total += numerals[s[right - 1]];
            console.log('total:', total);
        }
    
    return total;
    
    
};

let s = "MCMXCVI";
console.log(romanToInt(s));