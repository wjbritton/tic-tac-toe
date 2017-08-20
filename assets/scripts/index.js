'use strict'
// To Does
// Tie logic
// Game State API
// Count uncompleted games or trash them ?
// API for game state per turn
// patch pw with token
// Visualize Past games
// Logout API
// Make admin Page to track API ??

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
  countTurns = 1
  // Restart Game
  $('.restart').on('click', restart)

  // Change password
  // $('#changePassword').on('click', function () {
  //   $.ajax({
  //     type: 'POST',
  //     contentType: 'application/json; charset=utf-8',
  //     dataType: 'json',
  //     data: jsonData,
  //     url: 'http://tic-tac-toe.wdibos.com/sign-up',
  //     success: function register () {
  //       console.log('Registered')
  //       $('#register').addClass('hidden')
  //       $('#login').removeClass('hidden')
  //     }
  //   })
  // })
  //  Show Board P1
  $('#guest').on('click', function () {
    $('#makeboard').removeClass('hidden')
    $('#page1').addClass('hidden')
    $('#headerGuest').removeClass('hidden')
  })

  //  Show Login & Register P1
  $('#record').on('click', function () {
    $('#recordBtn').removeClass('hidden')
    $('#page1').addClass('hidden')
  })

  // Show Register
  $('#registerBtn').on('click', function () {
    $('#register').removeClass('hidden')
    $('#recordBtn').addClass('hidden')
  })

  // Show Login
  $('#loginBtn').on('click', function () {
    $('#login').removeClass('hidden')
    $('#recordBtn').addClass('hidden')
  })

  // Restart
  $('#registerSubmit').on('click', function () {
    const valEmail = $('#emailReg').val()
    const valPw = $('#passwordReg').val()
    console.log('UN ' + valEmail + ' PW ' + valPw)

    const jsonData = '{ "credentials": { "email": "' + valEmail + '", "password": "' + valPw + '" }}'
    console.log(jsonData)
    $.ajax({
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: jsonData,
      url: 'http://tic-tac-toe.wdibos.com/sign-up',
      success: function register () {
        console.log('Registered')
        $('#register').addClass('hidden')
        $('#login').removeClass('hidden')
      }
    })
  })

  // Sign In

  $('#signInSubmit').on('click', function () {
    const valEmail = $('#emailSign').val()
    const valPw = $('#passwordSign').val()
    console.log('UN ' + valEmail + ' PW ' + valPw)

    const jsonData = '{ "credentials": { "email": "' + valEmail + '", "password": "' + valPw + '" }}'
    console.log(jsonData)
    $.ajax({
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      data: jsonData,
      url: 'http://tic-tac-toe.wdibos.com/sign-in',
      success: function register () {
        console.log('Signed In')
        loadBoard()
        $('#makeboard').removeClass('hidden')
        $('#login').addClass('hidden')
        $('#header').removeClass('hidden')
      }
    })
  })

  $('#changePassword').on('click', function () {
    $('#passChange').removeClass('hidden')
    $('#makeboard').addClass('hidden')
  })
}

// Board Click Handler

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

// Win Logic

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

// O Game Logic

function endGameO () {
  console.log('O win')
  $('body').css('background-image', 'url(http://i.imgur.com/8GuZnih.jpg)')
  $('#makeboard').addClass('hidden')
  $('#restDiv').removeClass('hidden')
  $('#restartDiv').removeClass('hidden')
  $('#result').removeClass('hidden')
  $('#results').text('O Wins!')
  startGameButton()
  countTurns = 1
}

// X Game Logic

function endGameX () {
  console.log('X win')
  $('body').css('background-image', 'url(http://i.imgur.com/20hbFw4.jpg)')
  $('#makeboard').addClass('hidden')
  $('#restDiv').removeClass('hidden')
  $('#restartDiv').removeClass('hidden')
  $('#result').removeClass('hidden')
  $('#results').text('X Wins!')
  startGameButton()
  countTurns = 1
}

// Game Tie logic

function tie () {
  console.log('tie')
  $('body').css('background-image', 'url(http://i.imgur.com/ZqMyxK8.jpg)')
  $('#makeboard').addClass('hidden')
  $('#restDiv').removeClass('hidden')
  $('#restartDiv').removeClass('hidden')
  $('#result').removeClass('hidden')
  $('#results').text('Cats Game')
  startGameButton()
  countTurns = 1
}

// Reset Board Clear

function clear () {
  for (let i = 0; i < 9; i++) {
    const index = master[i].id
    $('#' + index).off()
  }
}

// Restart Board

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
  $('#passChange').addClass('hidden')
  clear()
  boardClick()
}

// Load New Board Functcions 1 Cleared 2 Events 3 Visualize

function loadBoard () {
  clear()
  boardClick()
  startGameButton()
}
