class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = new Map(s.split("").map((currentValue, index, array) => [currentValue, 0]));
        const tMap = new Map(t.split("").map((currentValue, index, array) => [currentValue, 0]));

        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
            tMap.set(t[i], tMap.get(t[i]) + 1);
        }

        for (const key of sMap.keys()) {
            if (sMap.get(key) !== tMap.get(key)) {
                return false;
            }
        }
        return true;
    }
}
