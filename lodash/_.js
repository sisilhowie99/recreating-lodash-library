const _ = {
    clamp(num, lower, upper) {
        let lowerClampedValue = Math.max(num, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
        // alternatively can probably use if statements/switch cases
    },

    inRange(num, start, end) {
        if(end === undefined) {
            [end, start] = [start, 0];
        };
        
        if(start > end) {
            [end, start] = [start, end];
        };

        let isInRange = start <= num && num < end;
        return isInRange;
    }
}




// Do not write or modify code below this line.
module.exports = _;