"use strict";
function number(array) {
    return array.reduce((a, v, i) => {
        a.push((i + 1).toString().concat(": " + v));
        return a;
    }, []);
}
number([]);
number(['a', 'b', 'c']);
