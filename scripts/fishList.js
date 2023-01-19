// Import the function that returns a copy of the fish array
import { getFish } from './database.js'
import { mostHolyFish } from './fish/fish-filter-functions.js'
import { soldierFish } from './fish/fish-filter-functions.js'
import { nonHolyFish } from './fish/fish-filter-functions.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const importantFishes = mostHolyFish(getFish())
    const secondaryFishes = soldierFish (getFish())
    const nonimportantFishes = nonHolyFish(getFish())

    // Start building a string filled with HTML syntax
    let htmlString = `<article class="fishList">
     <h3 class ="fishTankHeader"> Martin's Fish Tank</h3> 
     <section class= "card">
    <div class ="container">`

    // Create HTNL representations of each fish here
    for (const fish of importantFishes) {

        // Why is there a backtick used for this string?
        htmlString += `
            <aside>
                ${fish.tankCare}
            </aside>
            <div><img  class="fish__image image--card" ${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__size">Size: ${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
            </div>
        `
    }
    for (const fish of secondaryFishes){
    htmlString += `
            <aside>
                ${fish.tankCare}
            </aside>
            <div><img  class="fish__image image--card" ${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__size">Size: ${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
            </div>
        `
    }
    for (const fish of nonimportantFishes)
    htmlString += `
            <aside>
                ${fish.tankCare}
            </aside>
            <div><img  class="fish__image image--card" ${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__size">Size: ${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__food">${fish.food}</div>
            </div>
        `
    
    htmlString += `</section> 
    </article>`

    return htmlString
}
