'use strict'

// Game Object

const master = [
  {id: '1A', mark: ''},
  {id: '1B', mark: ''},
  {id: '1C', mark: ''},
  {id: '2A', mark: ''},
  {id: '2B', mark: ''},
  {id: '2C', mark: ''},
  {id: '3A', mark: ''},
  {id: '3B', mark: ''},
  {id: '3C', mark: ''}
]

//  Turn Count
let countTurns
console.log('Hello World')

// Make Board On Load
$(window).on('load', loadBoard)

// Closing Start On
function startGameButton () {
  countTurns = 2

  //  Show Board P1
  $('#guest').on('click', function showboard () {
    $('#makeboard').removeClass('hidden')
    $('#page1').addClass('hidden')
  })

  //  Show Login & Register P1
  $('#record').on('click', function record () {
    $('#recordBtn').removeClass('hidden')
    $('#page1').addClass('hidden')
  })

  // Show Register
  $('#registerBtn').on('click', function register () {
    $('#register').removeClass('hidden')
    $('#recordBtn').addClass('hidden')
  })

  // Show Login
  $('#loginBtn').on('click', function login () {
    $('#login').removeClass('hidden')
    $('#recordBtn').addClass('hidden')
  })

  // Restart
  $('#restart').on('click', restart)
}

function boardClick () {
  for (let i = 0; i < 9; i++) {
    const index = master[i].id
    console.log(index, master)

    $('#' + index).one('click', function mark () {
      // Turn Changer and X O Marker
      if (countTurns % 2 === 0) {
        $(this).html('X')
        master[i].mark = 1
        checkForWin()
        countTurns++
      } else {
        $(this).html('O')
        master[i].mark = 0
        checkForWin()
        countTurns++
      }
    })
  }
}

function checkForWin () {
  // Top Row
  if (master[0].mark === 0 && master[1].mark === 0 && master[2].mark === 0) {
    endGameO()
  }
  if (master[0].mark === 1 && master[1].mark === 1 && master[2].mark === 1) {
    endGameX()
  }
  // Middle Row
  if (master[3].mark === 0 && master[4].mark === 0 && master[5].mark === 0) {
    endGameO()
  }
  if (master[3].mark === 1 && master[4].mark === 1 && master[5].mark === 1) {
    endGameX()
  }
  // Bottom Row
  if (master[6].mark === 0 && master[7].mark === 0 && master[8].mark === 0) {
    endGameO()
  }
  if (master[6].mark === 1 && master[7].mark === 1 && master[8].mark === 1) {
    endGameX()
  }
  // Left Column
  if (master[0].mark === 0 && master[3].mark === 0 && master[6].mark === 0) {
    endGameO()
  }
  if (master[0].mark === 1 && master[3].mark === 1 && master[6].mark === 1) {
    endGameX()
  }
  // Middle Comlumn
  if (master[1].mark === 0 && master[4].mark === 0 && master[7].mark === 0) {
    endGameO()
  }
  if (master[1].mark === 1 && master[4].mark === 1 && master[7].mark === 1) {
    endGameX()
  }
  // Right Column
  if (master[2].mark === 0 && master[5].mark === 0 && master[8].mark === 0) {
    endGameO()
  }
  if (master[2].mark === 1 && master[5].mark === 1 && master[8].mark === 1) {
    endGameX()
  }
  // Left Down Right
  if (master[0].mark === 0 && master[4].mark === 0 && master[8].mark === 0) {
    endGameO()
  }
  if (master[0].mark === 1 && master[4].mark === 1 && master[8].mark === 1) {
    endGameX()
  }
  if (master[2].mark === 0 && master[4].mark === 0 && master[6].mark === 0) {
    endGameO()
  }
  if (master[2].mark === 1 && master[4].mark === 1 && master[6].mark === 1) {
    endGameX()
  }
  if (countTurns === 10) {
    console.log('tie')
    tie()
  }
}

function endGameO () {
  console.log('O win')
  $('body').css('background-image', 'url(http://i.imgur.com/8GuZnih.jpg)')
  $('#makeboard').addClass('hidden')
  $('#restDiv').removeClass('hidden')
  $('#restartDiv').removeClass('hidden')
  $('#result').removeClass('hidden')
  $('#resulth1').text('O Wins!')
  startGameButton()
  countTurns = 1
}

function endGameX () {
  console.log('X win')
  $('body').css('background-image', 'url(http://i.imgur.com/20hbFw4.jpg)')
  $('#makeboard').addClass('hidden')
  $('#restDiv').removeClass('hidden')
  $('#restartDiv').removeClass('hidden')
  $('#result').removeClass('hidden')
  $('#resulth1').text('X Wins!')
  startGameButton()
  countTurns = 1
}
function tie () {
  console.log('tie')
  $('body').css('background-image', 'url(http://i.imgur.com/ZqMyxK8.jpg)')
  $('#makeboard').addClass('hidden')
  $('#restDiv').removeClass('hidden')
  $('#restartDiv').removeClass('hidden')
  $('#result').removeClass('hidden')
  $('#resulth1').text('Cats Game')
  startGameButton()
  countTurns = 1
}

function restart () {
  // run game export
  // clear Board
  console.log(restart)
  for (let i = 0; i < 9; i++) {
    master[i].mark = ''
    console.log([i].mark)
  }
  console.log(master)
  console.log(countTurns, 'turns')
  $('.squarecut').html('')
  $('#restartDiv').addClass('hidden')
  $('#result').addClass('hidden')
  $('#makeboard').removeClass('hidden')
  clear()
  boardClick()
}

function loadBoard () {
  boardClick()
  startGameButton()
}

function clear () {
  for (let i = 0; i < 9; i++) {
    const index = master[i].id
    $('#' + index).off()
  }
}
