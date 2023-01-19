export const tipsDatabase = 
    [
    {
        id: 1, 
        tip: "Train to dive before your trip", 
    }, 
    {
        id: 2, 
        tip: "Bring an underwater camera", 

    }, 
    {
        id: 3, 
        tip: "Wait a day after diving before you fly home."
    }, 
]

export const getTips = () => {
    return tipsDatabase.tips.map(tips => ({...tips}))
}
