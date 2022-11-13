function printNumbers(n){
    const numberInsert = n**2
    const numbers = []
    for(let i =1; i < numberInsert+1; i++){
        numbers.push(i)
    }
    return numbers
}

export default printNumbers