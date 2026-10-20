class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        for (const num of nums) {
            if (!numsMap.get(num)) {
                numsMap.set(num, 1)
            } else {
                numsMap.set(num, numsMap.get(num) + 1)
            }
        }
        const numsCount = Array.from(numsMap).sort((a, b) => b[1] - a[1]);
        const result = numsCount.slice(0, k).map((value, index) => value[0]);
        return result;
    }
}
