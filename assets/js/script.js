// TODO: Declare any global variables we need
let count = {
    heads: 0,
    tails: 0
}

document.addEventListener('DOMContentLoaded', function () {

        function handleFlip(result) {
        // result = 'heads' || 'tails'
        console.log(result)
        count[result]++ // count.heads || count['heads']

        //DOM Stuff
        let img = document.querySelector(`img`)
        img.src = `assets/images/penny-${result}.jpg`
        img.alt = `${result} face of penny`

        let message = document.querySelector(`.message-container h3`)
        message.textContent = `You flipped ${result}`

        // Update the scoreboard
        let total = count.heads + count.tails
        //Update Numbers
        document.querySelector(`#${result}`).textContent = count[result]
        document.querySelector(`#heads-percent`).textContent = (count.heads/total * 100) + "%"
        document.querySelector(`#tails-percent`).textContent = (count.tails/total * 100) + "%"
        }



    document.querySelector(`#flip`).addEventListener(`click`, function(e) {
        console.log(`flipped a coin`)
        // TODO: Determine flip outcome
        if (Math.random() < .5) {
            //Do heads stuff
           handleFlip(`heads`)
        } else {
            console.log(`tails`)
            handleFlip(`tails`)
        }
        // TODO: Update image and status message in the DOM

        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    })
    document.querySelector(`#clear`).addEventListener(`click`, function(e) {
        console.log(`cleared scoreboard`)
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    })


})