//First Unique Character
function firstUniq(s) {
    for (let i = 0; i < s.length; ++i) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    return -1;
}

//Valid Anagram
const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');


//Move Zeroes

