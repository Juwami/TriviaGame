let time = 5
let intervalId = 0

window.onload = function () {
    $('.timer').text('00:30')
    start()
}



function start() {
        intervalId = setInterval(count, 1000)
}

function endGame() {
    $('.triviaQuestions').empty()

}

function timeConverter(t) {
    let minutes = Math.floor(t / 60)
    let seconds = t - (minutes * 60)

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    if (minutes === 0) {
        minutes = '00'
    } else if (minutes < 10) {
        minutes = '0' + minutes
    }

    return minutes + ':' + seconds
}

function count() {
    time--
    let converted = timeConverter(time)
    $('.timer').text(converted)
    console.log(time)

    if (time === 0) {
        clearInterval(intervalId)
        endGame()
    }
}