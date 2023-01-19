export const database = {
    fish: [ {
        name: "Name: Marvin", 
        food: "Favorite Food: Peanut Butter Sandwich", 
        size: 3,
        species: "Species: Cartoon",
        location: "Location: The imagination of children of all ages",
        tankCare: "Tank care instructions for this fish",
        image: `alt="the first fish in Martin's tank is a blue, cartoon fish" src="../images/fish one .png"`,
    },

    {
        name: "Name: Herbert", 
        food: "Favorite Food: Jelly Toast", 
        size: 5,
        species: "Species: Cartoon",
        location: "Location: The imagination of children of all ages",
        tankCare: "Tank care instructions for this fish", 
        image: `alt="the second fish in Martin's tank is an orange, cartoon fish" src="../images/fish two .png"`
    },

    {
        name: "Name: Zippy", 
        food: "Favorite Food: Milkshakes", 
        size: 10, 
        location: "Location: The imagination of children of all ages",
        species: "Species: Cartoon",
        tankCare: "Tank care instructions for this fish",
        image: `alt="the third fish in Martin's tank is a sad, blue, cartoon fish with a hook in its lip" src="../images/fish three.png"`, 
    },

    {
        name: "Name: Deborah",
        food: "Favorite Food: Pancakes",
        size: 12,
        species: "Species: Cartoon",
        location: "Location: The imagination of children of all ages", 
        tankCare: "Tank care instructions for this fish",
        image: `alt="the fourth fish in Martin's tank is an smiling, cartoon fish with bubbles around it" src="../images/fish four.jpeg"`
    },

    {
        name: "Name: My Dinner",
        food: "Favorite Food: Mine",
        size: 12001,
        species: "Species: The species doesn't matter so much as long as it was swimming this morning", 
        location: "Location: My Stomach",
        tankCare: "Tank care instructions for this fish",
        image: `alt="fried fish on a black plate with lemon" src="../images/fish five .jpeg"`,

    },

]

}
    
        
    


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
