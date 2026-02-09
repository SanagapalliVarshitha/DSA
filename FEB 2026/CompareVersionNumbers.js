var compareVersion = function(version1, version2) {
    const v1=version1.split('.').map(Number);
    // split('.') it will split and take if it see dot and map it is used to keep finally the Number 
    //will make the string to the number and remove the leading zeroes
    const v2=version2.split('.').map(Number);
    const maxlength=Math.max(v1.length,v2.length);
    while(v1.length<maxlength) v1.push(0);
    while(v2.length<maxlength) v2.push(0);
    for(let i=0;i<maxlength;i++)
    {
        if(v1[i]<v2[i])
        {
            return -1;
        }
        if(v2[i]<v1[i])
        {
            return 1;
        }
    }
    return 0;
};
console.log(compareVersion("1.2","1.10")) //-1