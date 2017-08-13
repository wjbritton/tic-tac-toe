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

// API Functions
const url = 'https://ga-wdi-boston.herokuapp.com'

function register () {
  getFormFields
  $.ajax({
    url: url + '/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': this.credentials.email,
        'password': this.credentials.password,
        'password_confirmation': this.credentials.password
      }
    }
  })
}
// Get Form Field Method

const getFormFields = (form) => {
  const target = {}
  const elements = form.elements || []
  for (let i = 0; i < elements.length; i++) {
    const e = elements[i]
    if (!e.hasAttribute('name')) {
      continue
    }

    let type = 'TEXT'
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type
        break
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase()
        break
    }

    const name = e.getAttribute('name')

    if (type === 'MULTIPLE') {
      for (let i = 0; i < e.length; i++) {
        if (e[i].selected) {
          addNestedValue(target, name, e[i].value)
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      addNestedValue(target, name, e.value)
    }
  }

  return target
}

// API Origin

const setAPIOrigin = (location, config) => {
  // strip the leading `'?'`
  const search = parseNestedQuery(location.search.slice(1))

  if (search.environment === 'development' ||
      (location.hostname === 'localhost' &&
       search.environment !== 'production')) {
    if (!(config.apiOrigin = config.apiOrigins.development)) {
      const port = +('GA'.split('').reduce((p, c) =>
        p + c.charCodeAt().toString(16), '')
      )
      config.apiOrigin = `http://localhost:${port}`
    }
  } else {
    config.apiOrigin = config.apiOrigins.production
  }
}

// parseNestedQuery

const parseNestedQuery = queryString =>
  queryString.split('&')
    .reduce((memo, element) => {
      if (element) {
        const keyValuePair = element.split('=')
        memo = addNestedValue(memo,
          decodeURIComponent(keyValuePair[0]),
          decodeURIComponent(keyValuePair[1]))
      }

      return memo
    }, {})

// addNestedValue

const addNestedValue = function (pojo, name, value) {
  const recurse = function recurse (pojo, keys, value) {
    const key = keys.shift()
    const next = keys[0]
    if (next === '') { // key is an array
      pojo[key] = pojo[key] || []
      pojo[key].push(value)
    } else if (next) { // key is a parent key
      pojo[key] = pojo[key] || {}
      recurse(pojo[key], keys, value)
    } else { // key is the key for value
      pojo[key] = value
    }

    return pojo
  }

  const keys = name.split('[').map((k) => k.replace(/]$/, ''))
  return recurse(pojo, keys, value)
}
