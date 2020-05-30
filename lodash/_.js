const _ = {
    //number methods
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
    },

    //string methods
    words(string) {
        const words = string.split(' ');
        return words;
    },

    pad(string, targetLength) {
        if(targetLength <= string.length) {
            return string
        } else {
            //amount of padding to add
            let padding = targetLength - string.length;

            //padding for start of string
            let startPad = Math.floor(padding / 2);

            //padding for the end of string
            let endPad = Math.ceil(padding / 2); //can also substract string.length and startPad from targetLength

            let paddedStr = `${' '.repeat(startPad)}${string}${' '.repeat(endPad)}`;

            return paddedStr;
        }
    },

    //object methods
    has(object, key) {
        let hasValue = object[key] != undefined ? true : false;
        return hasValue;
    },

    invert(object) {
        let invertObject = {};
        for (const key in object) {
            let originalValue = object[key];
            invertObject[originalValue] = key;
        };
        return invertObject;
    },

    findKey(object, predicate) {
        for (const key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);

            if(predicateReturnValue == true) {
                return key;
            }
        }
        return undefined;
    },

    //array methods
    drop(array, n) {
        if(n == undefined) {
            n = 1;
        };
        let droppedArray = array.slice(n);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        let dropNumber = array.findIndex(function(element, index) {
            return !predicate(element, index, array);
        });

        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk(array, size) {
        if(size == undefined) {
            size = 1;
        };

        let generatedChunk = [];
        for(i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i+size);
            generatedChunk.push(arrayChunk);
        };
        return generatedChunk;
    }
}




// Do not write or modify code below this line.
module.exports = _;