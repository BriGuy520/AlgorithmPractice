function openOrSenior(data){
    // ...
    return data.reduce((a, v) => {
      v[0] >= 55 && v[1] > 7 ? a.push("Senior") : a.push("Open") 
      return a;
    }, []);
  }