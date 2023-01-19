
export const mostHolyFish = (list) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of list) {
        if (fish.size % 3 === 0){
            holyFish.push (fish)
        }
    }

    return holyFish
}

export const soldierFish = (list) => {

    const soldiers =[]

    for (const fish of list) {
        if (fish.size % 5 === 0){
            soldiers.push(fish)
        }
    }
    // 5, 10, 15, 20, 25, etc... fish
    return soldiers
}

export const nonHolyFish = (list) => {

    const regularFish = []

    for (const fish of list){
        if(fish.size % 5 !== 0 && fish.size % 3 !== 0){
            regularFish.push(fish)
        }
    }
    // Any fish not a multiple of 3 or 5
    return regularFish
}