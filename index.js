const domtoimage = require('dom-to-image')
const FileSaver = require('file-saver')
const Sortable = require('sortablejs')
const optionsArea = document.querySelector('#options')
const sort = document.querySelector('#pieces')
var showModal = false
var customCounter = 0
var darkModeClass
var parts

/*
* Change HTML class from dark to light
*/
const toggleDarkMode = (mode) => {
  var root = document.getElementsByTagName( 'html' )[0]
  root.setAttribute( 'class', mode )
  darkModeClass = mode
  twemoji.parse(document.querySelector('#dm'))
}

/*
* Check if user's prefered color scheme is set to dark or not
*/
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toggleDarkMode('dark')
} else {
  toggleDarkMode('light')
}

/*
* Manually change color scheme
*/
window.darkMode = () => {
  if (darkModeClass == 'dark') {
    document.querySelector('#dm').innerHTML = '☀️'
    toggleDarkMode('light')
  } else {
    document.querySelector('#dm').innerHTML = '🌙'
    toggleDarkMode('dark')
  }
}

/*
* Search document for parts to addEventListener
*/
const checkForParts = () => {
  parts = document.querySelectorAll('.part')
  parts.forEach((part) => {
    part.addEventListener('click', partsListen)
  })
}
const partsListen = (event) => {
  event.target.removeEventListener('click', partsListen)
  document.querySelector('#text').classList.add('hidden')
  let img = event.target
  let outer = document.createElement('DIV')
  let piece = event.target.parentNode.cloneNode(true)
  let pw = document.createElement('DIV')
  pw.classList = 'my-6 flex items-center justify-between dark:bg-blueGray-500 dark:border-blueGray-300 border-gray-200 bg-gray-100 border-8 rounded-xl'
  pw.append(piece)
  let op = document.createElement('DIV')
  pw.id = piece.id + '-piece'
  op.classList = 'flex'
  let drag = document.createElement('DIV')
  drag.classList = 'drag flex mx-1 items-center justify-center p-1 hover:bg-gray-200 cursor-move rounded-full'
  drag.innerHTML = '<img src="./ui__icon-mover.svg" />'
  let trash = document.createElement('DIV')
  trash.classList = 'h-10 w-10 flex mx-1 items-center justify-center p-1 hover:bg-gray-200 cursor-pointer rounded-full transform duration-150 hover:-rotate-12 hover:scale-110 icon'
  trash.innerHTML = '🗑️'
  twemoji.parse(trash)
  op.append(drag)
  op.append(trash)
  pw.append(op)
  document.querySelector('#pieces').prepend(pw)
  let currentZ = document.querySelector('#pieces').children
  img.style.width = '90%'
  img.style.zIndex = 50 + (currentZ.length + 1)
  img.classList = 'absolute emoji-big animate'
  document.querySelector('#staging').prepend(img)
  confetti({
    angle: 75,
    origin: { x: 0 }
  })
  trash.addEventListener('click', (event) => {
    let key = event.target.parentNode.parentNode.parentNode.id.split('-')
    let img = document.querySelector('#img-' + key[1] + '-' + key[2])
    if (img) {
      img.style.width = '110%'
      img.classList = 'part transform duration-150 hover:-rotate-12 hover:scale-110'
      let home = document.querySelector('#div-' + key[1] + '-' + key[2])
      if (home) {
        home.append(img)
      }
      event.target.parentNode.parentNode.parentNode.remove()
    }
    checkForParts()
  })
}

/*
* Show modal for custom SVG code
*/
window.createCustom = () => {
  if (!showModal) {
    let modal = document.createElement('DIV')
    modal.classList = 'fixed inset-0 overflow-y-auto'
    modal.style.zIndex = 100
    modal.id = 'modal'
    modal.innerHTML = `
    <div style="font-family: 'Sniglet', cursive;" class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-gray-800 bg-opacity-75">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom dark:bg-blueGray-600 text-gray-700 rounded-lg text-left overflow-hidden border-8 border-cyan-500 dark:border-lime-400 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <textarea placeholder="Paste svg code here..." id="customText" class="appearance-none w-full h-96 rounded-lg dark:bg-blueGray-600 focus:outline-none bg-opacity-75 border-opacity-75 bg-gray-100 dark:text-lime-400 p-4 font-mono text-md"></textarea>
        <div class="flex items-center justify-center my-2">
          <div class="p-2 cursor-pointer mx-4 rounded bg-gray-200 border-4 border-gray-300 font-mono transform duration-150 hover:-translate-y-1" onclick="uploadCustom()">Enter</div>
          <div class="p-2 cursor-pointer mx-4 rounded bg-gray-200 border-4 border-gray-300 font-mono transform duration-150 hover:-translate-y-1" onclick="createCustom()">Cancel</div>
        </div>
      </div>
    </div>
    `
    twemoji.parse(modal)
    document.body.prepend(modal)
  } else {
    document.querySelector('#modal').remove()
  }
  showModal = !showModal
}

/*
* Parse the svg text and turn into base64 and create a new image in the DOM
*/
window.uploadCustom = () => {
  let faces = document.querySelector('#customText').value
  document.querySelector('#modal').remove()
  showModal = !showModal
  let face
  for (let i = 0; i < faces.length; i++) {
    if ((faces[i] + faces[i + 1] + faces[i + 2] + faces[i + 3]) === '<svg') {
      face = []
      face.push(faces[i] + faces[i + 1] + faces[i + 2] + faces[i + 3])
      if (!faces.includes('xmlns="http://www.w3.org/2000/svg"')) {
        face.push(' xmlns="http://www.w3.org/2000/svg"')
      }
      let s = i + 4
      while (faces[s] + faces[s + 1] + faces[s + 2] + faces[s + 3] + faces[s + 4] + faces[s + 5] != '</svg>') {
        face.push(faces[s])
        s++
      }
      face.push(faces[s] + faces[s + 1] + faces[s + 2] + faces[s + 3] + faces[s + 4] + faces[s + 5])
      i = s + 5
    } else {
      continue
    }
  }
  let div = document.createElement('DIV')
  div.id = 'div-' + 'custom' + '-' + customCounter
  let img = document.createElement('IMG')
  let decoded = unescape(encodeURIComponent(face.join('')))
  let base64 = btoa(decoded)
  let imgSource = `data:image/svg+xml;base64,${base64}`
  img.src = imgSource
  img.style.width = '110%'
  img.id = 'img-' + 'custom' + '-' + customCounter
  img.classList = 'part transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-75'
  div.classList = 'flex items-center justify-center bg-gray-200 border-gray-300 border-4 w-12 h-12 m-2 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
  div.innerHTML = img.outerHTML
  optionsArea.append(div)
  customCounter++
  checkForParts()
}

/*
* Fill area with parts to choose from
*/
window.fillOptions = (key) => {
  const imageExists = (image_url) => {
    let http = new XMLHttpRequest()
    http.open('HEAD', image_url, false)
    http.send()
    return http.status != 404
  }
  optionsArea.innerHTML = ''
  let amount
  if (key == 'head') {
    amount = 60
  } else if (key == 'eye') {
    amount = 49
  } else if (key == 'mouth') {
    amount = 40
  } else if (key == 'topper') {
    amount = 26
  }
  for (let i = 1; i < amount; i++) {
    let div = document.createElement('DIV')
    div.id = 'div-' + key + '-' + i
    let img = document.createElement('IMG')
    img.src = `./parts/${key}_${i < 10 ? '0' + i : i}.svg`
    img.style.width = '110%'
    img.id = 'img-' + key + '-' + i
    img.classList = 'part transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-75'
    div.classList = 'flex items-center justify-center bg-gray-200 border-gray-300 border-4 w-12 h-12 m-2 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
    div.innerHTML = img.outerHTML
    if (imageExists(img.src)) {
      optionsArea.append(div)
    } else {
      img.remove()
    }
  }
  checkForParts()
}

/*
* Listen for the reset command
*/
document.querySelector('#reset').addEventListener("click", () => {
  let staging = document.querySelector('#staging')
  staging.querySelectorAll('img').forEach((img) => {
    img.style.width = '110%'
    img.classList = 'part transform duration-150 hover:-rotate-12 hover:scale-110'
    let id = img.id.split('-')
    let home = document.querySelector('#div-' + id[1] + '-' + id[2])
    if (home) {
      home.append(img)
    }
  })
  staging.innerHTML = ''
  document.querySelector('#pieces').innerHTML = '<p id="text" class="pt-12 icon inline-block flex items-center justify-center">Add some emoji bits! &nbsp;🤪</p>'
  checkForParts()
})

/*
* Listen for the download command
*/
document.querySelector('#download').addEventListener("click", () => {
  domtoimage.toBlob(document.getElementById('staging'))
    .then((blob) => {
      let name = document.querySelector('#name').value ? document.querySelector('#name').value : 'youmoji'
        FileSaver.saveAs(blob, name + '.png')
    })
})

/*
* Allow sorting of the parts
*/
const sortable = Sortable.create(sort, {
    animation: 150,
    easing: "cubic-bezier(1, 0, 0, 1)",
    onEnd: () => {
        document.querySelector('#pieces').childNodes.forEach((child, i) => {
          if (child.nodeType === Node.TEXT_NODE) {

          } else {
            let key = child.id.split('-')
            let img = document.querySelector('#img-' + key[1] + '-' + key[2])
            if (img) {
              img.style.zIndex = 50 - i
            }
          }
        })
  	},
})

twemoji.parse(document.body)
fillOptions('head')
