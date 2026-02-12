var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1)
    {
         return ""
    }
    let a=str1.length;
    let b=str2.length;
    while(b)
    {
        [a,b]=[b,a%b]
    }
    return str2.slice(0,a)
};