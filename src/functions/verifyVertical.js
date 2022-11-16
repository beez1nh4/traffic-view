function verifyVertical(i, j){
    if (
        (i === 1 && j === 4) ||
        (i === 2 && j === 5) ||
        (i === 3 && j === 6) ||
        (i === 4 && j === 7) ||
        (i === 5 && j === 8) ||
        (i === 6 && j === 9) ||
        (j === 1 && i === 4) ||
        (j === 2 && i === 5) ||
        (j === 3 && i === 6) ||
        (j === 4 && i === 7) ||
        (j === 5 && i === 8) ||
        (j === 6 && i === 9)
    ){
        return true
    }
    return false
}

export default verifyVertical