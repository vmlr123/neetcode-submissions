class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        let numsSet = new Set(nums);
        if (numsSet.size !== nums.length) {
            result = true;
        }
        return result;
    }
}
