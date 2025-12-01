function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;

}

const originalPost = "JavaScript is fun, but sometimes JavaScript can be tricky.";
const censoredPost = censorWord(originalPost, "JavaScript");
console.log(censoredPost); 