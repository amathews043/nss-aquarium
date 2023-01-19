import { getFish } from './database.js'

const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

import { fishList } from './fishList.js'
import { mostHolyFish } from './fish/fish-filter-functions.js'
import { soldierFish } from './fish/fish-filter-functions.js'
import { nonHolyFish } from './fish/fish-filter-functions.js'
import { database } from './database.js'
import { tipsList } from './tips/travelTips.js'
import { destinationsList } from './locations/destinations.js'


const parentHTMLElement = document.querySelector(".subContainerFishCards");

parentHTMLElement.innerHTML = fishList() 

const secondHTMLElement = document.querySelector(".subContainerTravel")

secondHTMLElement.innerHTML = tipsList()

const thirdHTMLElement = document.querySelector(".subContainerTravelDestinations")

thirdHTMLElement.innerHTML = destinationsList()

console.log(destinationsList())

