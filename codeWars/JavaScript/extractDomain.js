// Write a function that when given a URL as a string, parses out just the domain name 
// and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    //your code here

    let regex = /\.+?\b\w+\b/g;

    console.log(url.match(regex));
}

domainName("http://www.powerschool.com/solutions");
domainName("www.xakep.ru");
domainName("http://google.co.jp");