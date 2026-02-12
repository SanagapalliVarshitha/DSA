var isValidSudoku = function(board) {
    //every time matrix iterarte over [row] [column] it is order
    let n=board.length // row length
    let m=board[0].length // column length
    //row  iteration
    for(let r=0;r<n;r++)
    {
        let res=new Set()
        for(let c=0;c<m;c++)
        {
            let val=board[r][c]
            if(val==='.')
            {
                continue
            }
            if(res.has(val))
            {
                return false
            }
            res.add(val)
        }
    }
    //column iteration
    for(let r=0;r<m;r++)
    {
        let res=new Set()
        for(let c=0;c<n;c++)
        {
            let val=board[c][r]
            if(val==='.')
            {
                continue
            }
            if(res.has(val))
            {
                return false
            }
            res.add(val)
        }
    }
    3*3
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
        let seen = new Set();

        for (let r = boxRow; r < boxRow + 3; r++) {
            for (let c = boxCol; c < boxCol + 3; c++) {
                let val = board[r][c];
                if (val === '.') continue;

                if (seen.has(val)) return false;
                seen.add(val);
            }
        }
    }
}

    return true
};