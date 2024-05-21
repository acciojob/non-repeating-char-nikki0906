function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // Step 1: Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first character with a count of one
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
