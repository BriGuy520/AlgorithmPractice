function number(array: string[]): string[] {

    return array.reduce((a: string[],v: string, i: any): string[] => {
       a.push((i + 1).toString().concat(": " + v));

       return a;
    }, []);
}

number([]);
number(['a','b','c']);