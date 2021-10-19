function hasLetters(word, arr) {
  
    //frequencycounter
    let frequencyCounterArr = buildFrequencyCounter(arr);
    let frequencyCounterWord = buildFrequencyCounter(word.split(''));
  
    
    console.log('frequencyCounterArr', frequencyCounterArr);
    console.log('frequencyCounterWord', frequencyCounterWord);
    
    
      
    
      return true
  }
  
  function buildFrequencyCounter(arr) {
    let frequencyCounter = {};
    
    arr.map((index, val) => {
      frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    });
    
    return frequencyCounter;
  }
  
  
  // input
  var word = "disassemble"
  var arr1 = ["d", "n", "i", "k", "t", "t", "a", "q", "w", "o", "b", "x", "x", "m", "z", "q", "i", "j", "k", "n"]
  var arr2 = ["d", "n", "e", "k", "t", "s", "a", "w", "o", "s", "b", "x", "m", "z", "l", "e", "i", "k", "b", "s"]