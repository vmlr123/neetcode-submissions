class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                if (prevMap.get(diff) < i) {
                    return [prevMap.get(diff), i];
                } else {
                    return [i, prevMap.get(diff)];
                }
            }

            prevMap.set(nums[i], i);
        }
    }
}
