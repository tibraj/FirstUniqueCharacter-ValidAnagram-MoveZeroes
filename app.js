//First Unique Character
function firstUniq(s) {
    for (let i = 0; i < s.length; ++i) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    return -1;
}

//Valid Anagram
const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');


//Move Zeroes
function moveZeroes(nums) {
    nums.sort((a,b) => a != 0 && b != 0 ? 0 : (a == 0 ? 1 : -1));
}

function moveZeroes2(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            length--;
        }
    }
    return nums
}

