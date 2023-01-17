const database = {
    fish: [ {
        name: "Name: Marvin", 
        food: "Favorite Food: Peanut Butter Sandwich", 
        size: "Size: Small",
        species: "Species: Cartoon",
        location: "The imagination of children of all ages",
        tankCare: "Tank care instructions for this fish",
        image: `alt="the first fish in Martin's tank is a blue, cartoon fish" src="../images/fish one .png"`,
    },

    {
        name: "Name: Herbert", 
        food: "Favorite Food: Jelly Toast", 
        size: "Size: Small but with a big heart", 
        species: "Species: Cartoon",
        location: "The imagination of children of all ages",
        tankCare: "Tank care instructions for this fish", 
        image: `alt="the second fish in Martin's tank is an orange, cartoon fish" src="../images/fish two .png"`
    },

    {
        name: "Name: Zippy", 
        food: "Favorite Food: Milkshakes", 
        size: "Size: Medium", 
        species: "Species: Cartoon",
        tankCare: "Tank care instructions for this fish",
        image: `alt="the third fish in Martin's tank is a sad, blue, cartoon fish with a hook in its lip" src="../images/fish three.png"`, 
    },

    {
        name: "Name: Deborah",
        food: "Favorite Food: Pancakes",
        size: "Size: Big Heart, Big Smile, Tiny Fish",
        species: "Species: Cartoon",
        location: "The imagination of children of all ages", 
        tankCare: "Tank care instructions for this fish",
        image: `alt="the fourth fish in Martin's tank is an smiling, cartoon fish with bubbles around it" src="../images/fish four.jpeg"`
    },

    {
        name: "Name: My Dinner",
        food: "Favorite Food: Mine",
        size: "Size: GIANT", 
        species: "Species: The species doesn't matter so much as long as it was swimming this morning", 
        location: "My Stomach",
        tankCare: "Tank care instructions for this fish",
        image: `alt="fried fish on a black plate with lemon" src="../images/fish five .jpeg"`,

    },

]

}
    
        
    


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
