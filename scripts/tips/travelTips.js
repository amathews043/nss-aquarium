import { tipsDatabase } from "./travelTipsDatabase.js";

export const tipsList = () => {
 let htmlString = `<div class="travel" >
 <h3 class ="travelHeader">Travel Tips</h3>
 <article class="quotes">
     <h3> Travel Tips and Tricks</h3>
     <ul>`
     let database = tipsDatabase
     for (const tip of database) {
        htmlString += `<li> ${tip.tip}</li>`
     }
     htmlString += `</ul>
     </article>`

     return htmlString

}