var isPrefixOfWord = function(sentence, searchWord) {
    const arr = sentence.split(' ')
    let count = 0;
    let prefix = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].startsWith(searchWord)){
            count++;
            prefix.push(i+1);
            
        }
    }
    
    return count == 0 ? -1 : prefix[0]
    
};

console.log(isPrefixOfWord("hellohello hellohellohello","ell"))