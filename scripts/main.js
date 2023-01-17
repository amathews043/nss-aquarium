import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { fishList } from './fishList.js'


const parentHTMLElement = document.querySelector(".subContainerFishCards");

parentHTMLElement.innerHTML = fishList() 