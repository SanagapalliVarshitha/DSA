var longestBalanced = function(s) {
    let maxlen=0
    for(let left=0;left<s.length;left++)
    {
        let map=new Map()
        for(let right=left;right<s.length;right++)
        {
            let res=[]
            if(!map.has(s[right]))
            {
                map.set(s[right],1)
            }
            else
            {
                map.set(s[right],(map.get(s[right])||0)+1)
            }
            for(let val of map.values()) // Iterating over map values
            {
                res.push(val)
            }
            let same=res.every(val=>val===res[0])// To check whether all frequencies same or not so used every
            if(same===true)
            {
                let len=right-left+1
                 if(maxlen<len)
                 {
                    maxlen=len
                 }
            }
        }
    }
    return maxlen
};