class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        var array: number[] = [];

        var prefix: number = 1;
        for (var i: number = 0; i < nums.length; i++) {
            array[i] = prefix;
            prefix *= nums[i];
        }
        
        var suffix: number = 1;
        for (var i: number = nums.length - 1; i >= 0; i--) {
            array[i] *= suffix;
            suffix *= nums[i];
        }

        return array;
    }
}
