class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        let values = this.keyStore.get(key);

        let l = 0, r = values.length - 1;

        let result = "";

        while (l <= r) {
            let mid = Math.floor((r+l)/ 2);
            let [time, value] = values[mid];

            // valid time stamp
            if (time <= timestamp) {
                result = value;
                l = mid + 1; // try finding close timestamp
            } else {
                r = mid - 1;
            }
        }

        return result;
    }
}
