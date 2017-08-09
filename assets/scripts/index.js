'use strict'

//  const setAPIOrigin = require('../../lib/set-api-origin')
//  const config = require('./config')
//
//  $(() => {
//    setAPIOrigin(location, config)
//  })

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

$(window).on('load', startGameButton)

// Closing Start On
function startGameButton () {
  countTurns = 1
  //  Show Board P1
  $('#guest').one('click', function showboard () {
    $('#makeboard').removeClass('hidden')
    $('#page1').addClass('hidden')
  })

  //  Show Login & Register P1
  $('#record').one('click', function record () {
    $('#recordBtn').removeClass('hidden')
    $('#page1').addClass('hidden')
  })

  // Show Register
  $('#registerBtn').one('click', function register () {
    $('#register').removeClass('hidden')
    $('#recordBtn').addClass('hidden')
  })

  // Show Login
  $('#loginBtn').one('click', function login () {
    $('#login').removeClass('hidden')
    $('#recordBtn').addClass('hidden')
  })

  // Restart
  $('#restart').one('click', restart)
}

function boardClick () {
  for (let i = 0; i < 9; i++) {
    const index = master[i].id
    $('#' + index).one('click', function mark () {
      // Turn Changer and X O Marker

      if (countTurns % 2 === 0) {
        $(this).html('X')
        master[i].mark = 1
        console.log('BFOR' + countTurns)
        countTurns++
        console.log('AFTER' + countTurns)
        checkForWin()
      } else {
        $(this).html('O')
        master[i].mark = 0
        console.log('BFOR' + countTurns)
        countTurns++
        console.log('AFTER' + countTurns)
        checkForWin()
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
  if (countTurns > 10) {
    tie()
  }
}
//   // Right Down Left

  function endGameO () {
    $('body').css('background-image', 'url(http://i.imgur.com/8GuZnih.jpg)')
    $('#makeboard').addClass('hidden')
    $('#restDiv').removeClass('hidden')
    $('#restartDiv').removeClass('hidden')
    $('#result').removeClass('hidden')
    $('#resulth1').text('O Wins!')
    countTurns = 1
  }

  function endGameX () {
    $('body').css('background-image', 'url(http://i.imgur.com/20hbFw4.jpg)')
    $('#makeboard').addClass('hidden')
    $('#restDiv').removeClass('hidden')
    $('#restartDiv').removeClass('hidden')
    $('#result').removeClass('hidden')
    $('#resulth1').text('X Wins!')
    countTurns = 1
  }

  function tie () {
    $('body').css('background-image', 'url(http://i.imgur.com/ZqMyxK8.jpg)')
    $('#makeboard').addClass('hidden')
    $('#restDiv').removeClass('hidden')
    $('#restartDiv').removeClass('hidden')
    $('#result').removeClass('hidden')
    $('#resulth1').text('Cats Game')
    countTurns = 1
  }

  function restart () {
    // run game export
    // clear Board
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
    startGameButton()
  }
  // API Functions

  // POST UN/PW
// $('#register').submit()
//   function postUnPw () {
//     console.log('Register')
//     let email = $('#regEmail').val()
//     let password = $('#passwordReg').val()
//     $.ajax({
//       type: 'POST',
//       url: 'tic-tac-toe.wdibos.com',
//       data: {email, password},
//       success: function (response) {
//         console.log(response)
//       }
//     })
//   }
boardClick()
require('./example')
