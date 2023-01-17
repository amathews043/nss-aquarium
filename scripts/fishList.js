// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class= "card">
        <div class ="container">
            <aside>
                Tank care instructions for this fish
            </aside>
            <div><img  class="fish__image image--card" ${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__size">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
            </div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}
