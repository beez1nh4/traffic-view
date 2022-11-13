function defineCapacity(i, j){
    let capacity = Number(prompt(`Ìnsert the capacity between ${i} and ${j}`))
    if (i > j){
        capacity = capacity*(-1)
    }
    return capacity
}

export default defineCapacity