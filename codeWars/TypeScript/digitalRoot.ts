function digitalRoot(n: number): number{

    let strArr: any = n.toString().split('');

    let answer = strArr.reduce((a: string, v: string) => parseInt(a) + parseInt(v), 0);

    return answer.toString().length > 1 ? digitalRoot(answer) : answer;
}

digitalRoot(19);
digitalRoot(45);