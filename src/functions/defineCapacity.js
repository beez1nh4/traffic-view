function defineCapacity(i, j){
    let capacity = Number(prompt(`Insert the capacity between ${i} and ${j}`))
    if (i > j){
        capacity = capacity*(-1)
    }
    return capacity
}

export default defineCapacity