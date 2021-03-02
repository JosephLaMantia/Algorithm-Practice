//sameFrequency takes in two positive ints.
//checks if they have the same frequency of digits
//must be O(n)
//ex: 182, 123 //true
//ex: 12, 133 //false

function sameFrequency(num1,num2){

    //check the amount of digits in first num
    let firstDigits = 0;
    if(num1 >= 1){
        ++firstDigits;
    }
    while(num1/10 >= 1){
        num1 /= 10;
        ++firstDigits;
    }

    //check the amount of digits in second num
    let secondDigits = 0;
    if(num2 >= 1){
        ++secondDigits;
    }
    while(num2/10 >= 1){
        num2 /= 10;
        ++secondDigits;
    }

    //display digits in each
    console.log("firstDigits: ", firstDigits);
    console.log("secondDigits: ", secondDigits);

    if(firstDigits !== secondDigits){   //if digit frequency not equal,
        return false;   //return false
    }

    return true;    //if checks passed, return true
}

console.log(sameFrequency(1,2));