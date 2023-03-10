function solve(input)
{
    let givenWords = input.shift().split(' ');
    let words = {}

    for (const word of givenWords) {
        words[word] = 0;
    }

    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }
    
    const sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )