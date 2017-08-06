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
// const winLogic = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
//  Turn Count
let countTurns = 1

console.log('Hello World')

$(window).on('load', startGameButton)

//  Make Board

function startGameButton () {
  //  Show Board P1
  $('#guest').one('click', function showboard () {
    alert('Make Board')
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

  for (let i = 0; i < 9; i++) {
    const index = master[i].id
    $('#' + index).one('click', function mark () {
      // Turn Changer and X O Marker

      if (countTurns % 2 === 0) {
        $(this).html('X')
        master[i].mark = 1
        countTurns++
        if (countTurns === 10) {
          alert(countTurns, 'Tie Game')
        } else {
          if (countTurns > 4) {
            checkForWin()
          }
        }
      } else {
        $(this).html('O')
        master[i].mark = 0
        countTurns++
        if (countTurns === 10) {
        } else {
          if (countTurns > 4) {
            alert('checkForWin')
            checkForWin()
          }
        }
      }
    })
  }

  function checkForWin () {
    // for (let i = 0; i < winLogic.length; i++) {
    //   const index = winLogic[i]
    //   console.log(index[0].mark)
    //   if (master[index[0]].mark === 0 && master[index[1]].mark === 0 && master[index[2]].mark === 0) {
    //     endGameO()
    //   }
    //   if (master[index[0]].mark === 1 && master[4].mark === 1 && master[6].mark === 1) {
    //     endGameX()
    //   }
    // }

    // Top Row
    if (master[0].mark === 0 && master[1].mark === 0 && master[2].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[0].mark === 1 && master[1].mark === 1 && master[2].mark === 1) {
      endGameX()
      alert('X')
    }
    // Middle Row
    if (master[3].mark === 0 && master[4].mark === 0 && master[5].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[3].mark === 1 && master[4].mark === 1 && master[5].mark === 1) {
      endGameX()
      alert('X')
    }
    // Bottom Row
    if (master[6].mark === 0 && master[7].mark === 0 && master[8].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[6].mark === 1 && master[7].mark === 1 && master[8].mark === 1) {
      endGameX()
      alert('X')
    }
    // Left Column
    if (master[0].mark === 0 && master[3].mark === 0 && master[6].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[0].mark === 1 && master[3].mark === 1 && master[6].mark === 1) {
      endGameX()
      alert('X')
    }
    // Middle Comlumn
    if (master[1].mark === 0 && master[4].mark === 0 && master[7].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[1].mark === 1 && master[4].mark === 1 && master[7].mark === 1) {
      endGameX()
      alert('X')
    }
    // Right Column
    if (master[2].mark === 0 && master[5].mark === 0 && master[8].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[2].mark === 1 && master[5].mark === 1 && master[8].mark === 1) {
      endGameX()
      alert('X')
    }
    // Left Down Right
    if (master[0].mark === 0 && master[4].mark === 0 && master[8].mark === 0) {
      endGameO()
      alert('O')
    }
    if (master[0].mark === 1 && master[4].mark === 1 && master[8].mark === 1) {
      endGameX()
      alert('X')
    }
  }
  //   // Right Down Left

  function endGameO () {
    $('body').css('background-image', 'url(http://i.imgur.com/8GuZnih.jpg)')
    $('#makeBoard').addClass('hidden')
    $('#restDiv').removeClass('hidden')
  }

  function endGameX () {
    $('body').css('background-image', 'url(http://i.imgur.com/20hbFw4.jpg)')
    $('#makeBoard').addClass('hidden')
    $('#restDiv').removeClass('hidden')
  }
// Closing Start On
}

require('./example')
