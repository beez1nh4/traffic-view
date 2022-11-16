function verifyHorizontal(i, j){
    if (
        (i === 1 && j === 2) ||
        (i === 2 && j === 3) ||
        (i === 3 && j === 4) ||
        (i === 4 && j === 5) ||
        (i === 5 && j === 6) ||
        (i === 6 && j === 7) ||
        (i === 7 && j === 8) ||
        (i === 8 && j === 9) ||
        (j === 1 && i === 2) ||
        (j === 2 && i === 3) ||
        (j === 3 && i === 4) ||
        (j === 4 && i === 5) ||
        (j === 5 && i === 6) ||
        (j === 6 && i === 7) ||
        (j === 7 && i === 8) ||
        (j === 8 && i === 9)
    ){
        return true
    }
    return false
}

export default verifyHorizontal