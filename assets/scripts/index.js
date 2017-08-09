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
  if (master[2].mark === 0 && master[4].mark === 0 && master[7].mark === 0) {
    endGameO()
  }
  if (master[2].mark === 1 && master[4].mark === 1 && master[7].mark === 1) {
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
  // boardClick()
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
  // boardClick()
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
  // boardClick()
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
}

// API Functions

// api call for registration
// const addUser = function (data) {
//   // console.log(data)
//   return $.ajax({
//     url: app.host + '/sign-up/',
//     // headers: { 'header': 'Content-Type: application/json' },
//     method: 'POST',
//     data: {
//       'credentials': {
//         'email': data.credentials.email,
//         'password': data.credentials.password,
//         'password_confirmation': data.credentials.password
//       }
//     }
//     // crossDomain: true
//   })
// }
//
// // api call for logging in suser
// const userLogin = function (data) {
//   /* let userInfo = {
//       Hello : "Hello World"
//   } */
//   // console.log(userInfo)
//   // console.log(data)
//   return $.ajax({
//     url: app.host + '/sign-in/',
//     method: 'POST',
//     data: {
//       'credentials': {
//         'email': data.credentials.email,
//         'password': data.credentials.password
//       }
//     } /* ,
//     success: function (response) {
//       console.log(response.user)
//       //userInfo = response.user
//       return userInfo
//     } */
//   })
// }
//
// // api call for resetting password
// const passwordReset = function (data) {
//   console.log(app.user.token)
//   // console.log(data)
//   return $.ajax({
//     url: app.host + '/change-password/' + app.user.id,
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     method: 'PATCH',
//     data /* : {
//       "passwords": {
//       "old": data.passwords.old,
//       "new": data.passwords.new
//     }
//   } */
//   })
// }
//
// // api call for logging in
// const userLogout = function () {
//   // console.log('something')
//   return $.ajax({
//     url: app.host + '/sign-out/' + app.user.id,
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     method: 'DELETE'
//   })
// }
//
// // api call for starting a new game
// const getGame = function () {
//   // console.log ("Hello")
//   console.log(app.user.token)
//   return $.ajax({
//     url: app.host + '/games',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     method: 'POST',
//     success: function (response) {
//       console.log(response)
//     }
//     // ail: function (error) {
//       // console.log(error)
//       // console.log("Please Log in")
//     // }
//   })
// }
//
// /* const index = function() {
//   return $.ajax ({
//     url: app.host + '/users',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=$TOKEN'
//     }
//   })
// } */
//
// // event handler for adding moves to game object
// const updateMoves = function (index, value, over) {
//   console.log(app.user.token)
//   return $.ajax({
//     url: app.host + '/games/' + app.game.id,
//     method: 'PATCH',
//     // dataType: 'jsonp',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     data: {
//       'game': {
//         'cell': {
//           'index': index,
//           'value': value
//         },
//         'over': over
//       }
//     }
//   })
// }
//
// // event handler for viewing games by user
// const gameView = function () {
//   console.log(app.user.token)
//   return $.ajax({
//     url: app.host + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     }
//   })
// }
boardClick()
require('./example')
