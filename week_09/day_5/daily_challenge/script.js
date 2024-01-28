// Instructions
// Create a function that:
//
// takes in two strings as two parameters
// and returns a boolean that indicates whether the first string is an anagram of the second string.

const isAnagram = (str1, str2) => {
    // Convert both strings to lowercase and split into arrays, removing spaces
    let charArray1 = str1.toLowerCase().split('').filter(char => char !== ' ');
    let charArray2 = str2.toLowerCase().split('').filter(char => char !== ' ');

    // Initialize result to true
    let isAnagramResult = true;

    // Iterate over each character in the first array
    charArray1.forEach(char => {
        // Find the index of the current character in the second array
        const foundCharIndex = charArray2.findIndex(element => element === char);
        if (foundCharIndex === -1) {
            // If character is not found, set result to false
            isAnagramResult = false;
        }
        // Remove the found character from the second array
        charArray2.splice(foundCharIndex, 1);
    });

    // Return true if isAnagramResult is true and the second array is empty
    return isAnagramResult && charArray2.length === 0;
}


console.log(isAnagram('Astronomer', 'Moon starer'))