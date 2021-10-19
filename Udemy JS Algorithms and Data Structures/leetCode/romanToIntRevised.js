//"MCMXCVI"
//Get total.
/**
 * @param {string} s
 * @return {number}
 */
 let romanToInt = (s) => {

    //map numerals to their values
    const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M:1000};
    
    let total = 0; //track total
    
    s.split('').forEach((num, i) => {   //iterate through string
        if(numerals[num] < numerals[s[i + 1]]) total -= numerals[num];  //if next numeral is larger, we subtract current numeral from total
        else total += numerals[num];                                    //if not, we add current numeral to total
    })
    
    return total;

};

let s = "MCMXCVI";
console.log(romanToInt(s));