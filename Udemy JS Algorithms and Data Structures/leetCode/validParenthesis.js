/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    
    let stack = [];
    
    for(let char of s){
        if(bracket[char]){
            stack.push(bracket[char]);
        } else {
            if(stack.pop() !== char) return false;
        }
    }
    
    return true;
};

let s = "([)]"

//true if empty or bracket rules correct
//false otherwise

console.log(isValid(s))