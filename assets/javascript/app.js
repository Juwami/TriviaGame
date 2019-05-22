let time = 60
let intervalId = 0
let questionNum = $('.question').length

window.onload = function () {
    $('.timer').text('01:00')
    startTimer()
}

function startTimer() {
    intervalId = setInterval(count, 1000)
}

function endGame() {
    clearInterval(intervalId)
    let questionsCorrect = checkAnswer()
    let questionsWrong = checkIncorrectAnswer()
    $('.triviaQuestions').hide()

    let $restartArea = $('.restartArea').addClass('d-flex justify-content-center')
    let $divOne = $('<div>').addClass('col-12 text-center').text('You have answered ' + questionsCorrect + ' out of ' + questionNum + ' questions correct!')
    let $divTwo = $('<div>').addClass('col-12 text-center').text('You have answered ' + questionsWrong + ' out of ' + questionNum + ' questions incorrect!')

    $restartArea
        .append($divOne)
        .append($divTwo)

    // add a restart button
    let $restartBtn = $('<button>').text('Restart Game?')
        .on('click', restart)

    $restartArea.append($restartBtn)
}

function restart() {
    // $('input[type="radio"]:checked.correct').attr('checked',false);
    $('.triviaQuestions').show()
    time = 60
    startTimer()
    $('.restartArea').empty()
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

function checkAnswer() {
    let questionCorrect = $('input[type="radio"]:checked.correct').length
    console.log('right', questionCorrect)
    return questionCorrect
}

function checkIncorrectAnswer() {
    let questionWrong = $('input[type="radio"]:checked.incorrect').length
    console.log('wrong', questionWrong)
    return questionWrong
}

$('#Submit').click(function () {
    endGame()
})