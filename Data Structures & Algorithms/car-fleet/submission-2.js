class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let pair = [];
        for (let i = 0; i < position.length; i++) {
            let currentDis = position[i];
            let currentSpeed = speed[i];
            pair.push([currentDis, currentSpeed]);
        }

        pair = pair.sort((a,b) => b[0] - a[0]);

        let stack = [];

        for (let i = 0; i < pair.length; i++) {
            let [position, speed] = pair[i];
            let time = (target - position) / speed;

            if (
                stack.length === 0 ||
                time > stack[stack.length -1]
            ) {
                stack.push(time);
            }
            // otherwise it merges automaticallly
        }
        return stack.length;
    }
}
