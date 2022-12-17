function number(array: string[]): string[] {

    for(let i: number = 1; i <= array.length; i++){
        array[i - 1] = (i.toString() + ": ").concat(array[i - 1]);
    }

    return array;
}

number([]);
number(['a','b','c']);