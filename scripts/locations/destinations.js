import { destinationsDatabase } from "./destinationsDatabase.js";


export const destinationsList = () => {
    let htmlString = `<h3 class ="travelHeader">Favorite Destinations</h3><article class="places">
    <h3> Destinations</h3>
    <ul>`
    const database = destinationsDatabase
    for (const destination of database){
        htmlString += `<li> ${destination.destination}</li>`
    }
    htmlString += `</ul>
        </article>`

    return htmlString
}
// console.log(destinationsList())