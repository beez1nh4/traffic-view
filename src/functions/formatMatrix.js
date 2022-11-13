function formatMatrix(n){
    const matrixFormat = []
    for(let i = 0; i < n; i++){
        matrixFormat.push([])
        for(let j =0; j < n; j ++){
            matrixFormat[i].push(0)
        }
    }

    return matrixFormat
}

export default formatMatrix