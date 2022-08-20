// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
//
//
//     Example 1:
//
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
//
// Input: s = "God Ding"
// Output: "doG gniD"
//
//
// Constraints:
//
//     1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
//     s does not contain any leading or trailing spaces.
//     There is at least one word in s.
//     All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let arr =  s.split(' ');
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i].split("")
        let b = a.reverse().join("")
        result.push(b)
    }
    return result.join(" ")
};