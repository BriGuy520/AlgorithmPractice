function number(array) {
    return array.reduce(function (a, v, i) {
        a.push(v.concat(i + 1).toString());
        return a;
    }, []);
}
number([]);
number(['a', 'b', 'c']);
