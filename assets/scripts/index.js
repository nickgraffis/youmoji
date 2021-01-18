const domtoimage = require('dom-to-image')
const FileSaver = require('file-saver')
const Sortable = require('sortablejs')
const optionsArea = document.querySelector('#options')
const sort = document.querySelector('#pieces')
const Shake = require('shake.js');
var showModal = false
var customCounter = 0
var darkModeClass
var parts
var headFileNames = [
  'head_alien_fi.svg', 'head_alien_twe_2.svg', 'head_angel_fi.svg', 'head_baby_fi.svg', 'head_bear_twe.svg', 'head_blue_fi.svg', 'head_brain_twe.svg', 'head_cat_fi.svg', 'head_chick_in_egg_twe.svg', 'head_chick_twe.svg', 'head_clown_fi.svg', 'head_cowboy_fi.svg', 'head_devil_fi.svg', 'head_dog_twe.svg', 'head_fire_twe.svg', 'head_frog_twe.svg', 'head_ghost_fi.svg', 'head_gorilla_twe.svg', 'head_green_fi.svg', 'head_hat_baseball_twe_2.svg', 'head_hat_basketball_twe_2.svg', 'head_hat_bell_twe_2.svg', 'head_hat_birthday_cake_twe_2.svg', 'head_hat_blue_twe_2.svg', 'head_hat_bread_twe_2.svg', 'head_hat_broken_heart_twe_2.svg', 'head_hat_cat_twe_2.svg', 'head_hat_clown_twe_2.svg', 'head_hat_coffee_twe_2.svg', 'head_hat_computer_twe_2.svg', 'head_hat_cookie_twe_2.svg', 'head_hat_coronovirus_twe_2.svg', 'head_hat_crystal_ball_twe_2.svg', 'head_hat_devil_twe_2.svg', 'head_hat_earth_twe_2.svg', 'head_hat_egg_twe_2.svg', 'head_hat_eggplant_twe_2.svg', 'head_hat_eight_ball_twe_2.svg', 'head_hat_floppy_disk_twe_2.svg', 'head_hat_football_twe_2.svg', 'head_hat_french_fries_twe_2.svg', 'head_hat_ghost_twe_2.svg', 'head_hat_grapes_twe_2.svg', 'head_hat_green_apple_twe_2.svg', 'head_hat_green_twe_2.svg', 'head_hat_hamburger_twe_2.svg', 'head_hat_heart_twe_2.svg', 'head_hat_ice_cream_cone_twe_2.svg', 'head_hat_lemon_twe_2.svg', 'head_hat_matcha_twe_2.svg', 'head_hat_mochi_twe_2.svg', 'head_hat_moon_one_twe_2.svg', 'head_hat_onion_twe_2.svg', 'head_hat_orange_twe_2.svg', 'head_hat_peach_twe_2.svg', 'head_hat_phone_twe_2.svg', 'head_hat_pizza_twe_2.svg', 'head_hat_plate_twe_2.svg', 'head_hat_potato_twe_2.svg', 'head_hat_present_twe_2.svg', 'head_hat_pumpkin_twe_2.svg', 'head_hat_purple_twe_2.svg', 'head_hat_red_apple_twe_2.svg', 'head_hat_red_twe_2.svg', 'head_hat_robot_twe_2.svg', 'head_hat_skull_twe_2.svg', 'head_hat_soccer_twe_2.svg', 'head_hat_star_one_twe_2.svg', 'head_hat_star_two_twe_2.svg', 'head_hat_stop_twe_2.svg', 'head_hat_sun_twe_2.svg', 'head_hat_tennis_twe_2.svg', 'head_hat_toilet_paper_twe_2.svg', 'head_hat_tomato_twe_2.svg', 'head_hat_top_hat_twe_2.svg', 'head_hat_wiskey_twe_2.svg', 'head_head_exploded_fi.svg', 'head_heart_twe.svg', 'head_koala_twe.svg', 'head_lion_twe.svg', 'head_monkey_fi.svg', 'head_ms_clause_fi.svg', 'head_octopus_twe.svg', 'head_oni_one_fi.svg', 'head_oni_two_twe.svg', 'head_panda_twe.svg', 'head_pig_twe.svg', 'head_pink_fi.svg', 'head_polar_bear_twe.svg', 'head_poop_fi.svg', 'head_real_face_black_skin_twe.svg', 'head_real_face_dark_skin_twe.svg', 'head_real_face_light_skin_twe.svg', 'head_real_face_medium_dark_skin_twe.svg', 'head_real_face_medium_skin_twe.svg', 'head_real_face_yellow_twe.svg', 'head_red_fi.svg', 'head_robot_fi.svg', 'head_santa_clause_fi.svg', 'head_saturn_twe.svg', 'head_skull_fi.svg', 'head_squid_twe.svg', 'head_swim_cap_fi.svg', 'head_tiger_twe.svg', 'head_tooth_twe.svg', 'head_vomit_fi.svg', 'head_yellow_fi.svg'
]
var headNames = [
  'yellow',
  'red',
  'green',
  'purple',
  'blue',
  'cat',
  'robot',
  'poop',
  'skull',
  'birthday_cake',
  'ice_cream_cone',
  'egg',
  'onion',
  'grapes',
  'pizza',
  'french_fries',
  'bread',
  'potato',
  'eggplant',
  'tomato',
  'peach',
  'lemon',
  'orange',
  'red_apple',
  'green_apple',
  'pumpkin',
  'heart',
  'broken_heart',
  'clown',
  'earth',
  'moon_one',
  'plate',
  'wiskey',
  'matcha',
  'coffee',
  'cookie',
  'mochi',
  'basketball',
  'star_one',
  'star_two',
  'ghost',
  'devil',
  'top_hat',
  'baseball',
  'football',
  'soccer',
  'present',
  'crystal_ball',
  'floppy_disk',
  'computer',
  'phone',
  'stop',
  'eight_ball',
  'tennis',
  'sun',
  'clock',
  'bell',
  'toilet_paper',
  'oni_one',
  'head_exploding',
  'baby',
  'tiger',
  'oni_two',
  'monkey',
  'lion',
  'panda',
  'octopus',
  'frog',
  'moon_two',
  'fire',
  'brain'
]

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

/*
* Detect if the browser is a touch device
*/
const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

/*
* Search document for parts to addEventListener
*/
const checkForParts = () => {
  parts = document.querySelectorAll('.part')
  parts.forEach((part) => {
    part.removeEventListener('click', partsListen)
    part.addEventListener('click', partsListen)
  })
}

/*
* Search document for one part to addEventListener
*/
const checkForPart = (part) => {
  part.removeEventListener('click', partsListen)
  part.addEventListener('click', partsListen)
}
const partsListen = (addConfetti = true) => {
  event.target.removeEventListener('click', partsListen)
  let img = event.target
  let piece = event.target.parentNode.cloneNode(true)
  piece.removeEventListener('click', partsListen)
  let pw = document.createElement('DIV')
  pw.classList = 'drag select-none flex items-center justify-center bg-gray-200 border-gray-300 border-4 lg:w-20 lg:h-20 w-12 h-12 lg:mx-10 md:mx-10 mx-0 my-2 lg:my-6 md:my-6 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
  pw.append(piece)
  pw.id = piece.id + '-piece'
  piece.classList = 'inner select-none flex items-center justify-center bg-gray-200 lg:w-16 lg:h-16 w-10 h-10 m-2 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
  piece.id = piece.id + '-inner'
  piece.querySelector('img').classList.remove('part')
  document.querySelector('#pieces').prepend(pw)
  let currentZ = document.querySelector('#pieces').children
  img.style.width = '30%'
  img.style.zIndex = 50 + (currentZ.length + 1)
  img.classList = 'absolute animate__animated animate__jello'
  document.querySelector('#staging').prepend(img)
  if (addConfetti) {
    confetti({
      angle: 75,
      origin: { x: 0 }
    })
  }
  lookForDraggables()
}

const partsCreate = (target, addConfetti = true) => {
  if (target && target.parentNode) {
    target.removeEventListener('click', partsListen)
    let img = target
    let piece = target.parentNode.cloneNode(true)
    piece.removeEventListener('click', partsListen)
    let pw = document.createElement('DIV')
    pw.classList = 'drag select-none flex items-center justify-center bg-gray-200 border-gray-300 border-4 lg:w-20 lg:h-20 w-12 h-12 lg:mx-10 md:mx-10 mx-0 my-2 lg:my-6 md:my-6 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
    pw.append(piece)
    pw.id = piece.id + '-piece'
    piece.classList = 'inner select-none flex items-center justify-center bg-gray-200 lg:w-16 lg:h-16 w-10 h-10 m-2 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
    piece.id = piece.id + '-inner'
    piece.querySelector('img').classList.remove('part')
    document.querySelector('#pieces').prepend(pw)
    let currentZ = document.querySelector('#pieces').children
    img.style.width = '30%'
    img.style.zIndex = 50 + (currentZ.length + 1)
    img.classList = 'absolute animate__animated animate__jello'
    document.querySelector('#staging').prepend(img)
    if (addConfetti) {
      confetti({
        angle: 75,
        origin: { x: 0 }
      })
    }
    lookForDraggables()
  } else {
    return
  }
}

/*
* Search document for draggables to addEventListener
*/
const lookForDraggables = (id) => {
  const hold_trigger = document.querySelectorAll('.drag');
  for (let i = 0; i < hold_trigger.length; i++) {
    let old_element = hold_trigger[i]
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    if (isTouchDevice()) {
      new_element.addEventListener('click', () => showOptionsMenu(event, hold_trigger[i]))
    } else {
      new_element.addEventListener('click', () => showOptionsMenu(event, hold_trigger[i], 'pc'))
    }
  }
}

/*
* Show the options menu if the user touches or clicks
*/
const showOptionsMenu = (event, trigger, screenType = 'touch') => {
  event.preventDefault();
  let timeout_id = 0
  const clientRect = event.target.getBoundingClientRect();
  let key = event.target.id.split('-')
  let targetId = 'div-' + key[1] + '-' + key[2] + '-piece'
  if (screenType === 'pc') {
    createOptionsMenu(targetId, clientRect)
  } else {
    createOptionsMenu(targetId, clientRect)
  }
}

/*
* Create the options menu
*/
const createOptionsMenu = (divId, client) => {
  if (document.querySelector('#options-hold')) document.querySelector('#options-hold').remove()
  setTimeout(() => {
    let options = document.createElement('DIV')
    options.classList = 'absolute -mt-28 bg-gray-800 flex flex-col items-center rounded-2xl'
    options.style.left = `${client.x}px`;
    options.style.top = `${client.y}px`;
    options.style.zIndex = 10000;
    options.id = 'options-hold'
    options.innerHTML =
    `
      <div class="flex justify-between border-b-2 px-2 border-gray-500 items-center w-full">
        <span onclick="moveLeft('${divId}')" id="bold" class="options-click cursor-pointer text-white text-xl p-2">
          <svg class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
        <span class="text-white"> Bring forward</span>
      </div>
      <div class="flex justify-between border-b-2 px-2 border-gray-500 items-center w-full">
        <span onclick="moveRight('${divId}')" id="bold" class="options-click cursor-pointer text-white text-xl p-2">
           <svg class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </span>
        <span class="text-white"> Bring back</span>
      </div>
      <div class="flex justify-between px-2 items-center w-full">
        <span onclick="trash('${divId}')" id="bold" class="options-click cursor-pointer text-white text-xl p-2">
          <svg class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </span>
        <span class="text-white"> Remove</span>
        <div class="bg-gray-800 w-4 h-4 transform rotate-45 absolute mt-4 ml-12"></div>
      </div>
    `
    document.body.prepend(options)
    setTimeout(() => {
      window.addEventListener('click', removeOptionsMenu)
    }, 100)
  }, 150)
}

/*
* Remove the options menu
*/
const removeOptionsMenu =  (event) => {
  if (document.querySelector('#options-hold') && !event.target.parentNode.parentNode.classList.contains('options-click')) {
    console.log('removed options')
    document.querySelector('#options-hold').remove()
    setTimeout(() => {
      window.removeEventListener('click', removeOptionsMenu)
    }, 100)
  }
}

/*
* Bring the emoji bit forward
*/
window.moveLeft = (id) => {
  let pieces = document.querySelector('#pieces')

  let childrenIds = []
  for (let i = 0; i < pieces.children.length; i++) {
    childrenIds.push(pieces.children[i].id)
  }
  let targetId = id
  let target = document.querySelector('#' + id)
  let indexOf = childrenIds.indexOf(targetId)
  if (indexOf != 0) {
    let newLocation = target.cloneNode(true)
    target.remove()
    pieces.insertBefore(newLocation, pieces.children[indexOf - 1]);
    reorderZIndex()
  }
  document.querySelector('#options-hold').remove()
  lookForDraggables()
}

/*
* Bring the emoji bit back
*/
window.moveRight = (id) => {
  let pieces = document.querySelector('#pieces')

  let childrenIds = []
  for (let i = 0; i < pieces.children.length; i++) {
    childrenIds.push(pieces.children[i].id)
  }

  let targetId = id
  let target = document.querySelector('#' + id)
  let indexOf = childrenIds.indexOf(targetId)
  if (indexOf != (childrenIds.length - 1)) {
    let newLocation = target.cloneNode(true)
    target.remove()
    pieces.insertBefore(newLocation, pieces.children[indexOf + 1]);
    reorderZIndex()
  }
  document.querySelector('#options-hold').remove()
  lookForDraggables()
}

/*
* Show modal for custom SVG code
*/
window.createCustom = () => {
  // if (!showModal) {
  //   let modal = document.createElement('DIV')
  //   modal.classList = 'fixed inset-0 overflow-y-auto'
  //   modal.style.zIndex = 100
  //   modal.id = 'modal'
  //   modal.innerHTML = `
  //   <div style="font-family: 'Sniglet', cursive;" class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-gray-800 bg-opacity-75">
  //     <div class="fixed inset-0 transition-opacity" aria-hidden="true">
  //       <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
  //     </div>
  //     <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  //     <div class="inline-block align-bottom dark:bg-blueGray-600 text-gray-700 rounded-lg text-left overflow-hidden border-8 border-cyan-500 dark:border-lime-400 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
  //       <textarea placeholder="Paste svg code here..." id="customText" class="appearance-none w-full h-96 rounded-lg dark:bg-blueGray-600 focus:outline-none bg-opacity-75 border-opacity-75 bg-gray-100 dark:text-lime-400 p-4 font-mono text-md"></textarea>
  //       <div class="flex items-center justify-center my-2">
  //         <div class="p-2 cursor-pointer mx-4 rounded bg-gray-200 border-4 border-gray-300 font-mono transform duration-150 hover:-translate-y-1" onclick="uploadCustom()">Enter</div>
  //         <div class="p-2 cursor-pointer mx-4 rounded bg-gray-200 border-4 border-gray-300 font-mono transform duration-150 hover:-translate-y-1" onclick="createCustom()">Cancel</div>
  //       </div>
  //     </div>
  //   </div>
  //   `
  //   twemoji.parse(modal)
  //   document.body.prepend(modal)
  // } else {
  //   document.querySelector('#modal').remove()
  // }
  // showModal = !showModal

  document.querySelector('#svg-input').classList.replace('h-1', 'h-96')
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
window.fillOptions = (key, virtual = false) => {
  let amount
  if (key == 'head') {
    amount = 107
  } else if (key == 'eyes') {
    amount = 83
  } else if (key == 'mouth') {
    amount = 60
  } else if (key == 'extras') {
    amount = 40
  }
  if (virtual) {
    fillUpVirtual(amount, key, headFileNames)
  } else {
    fillUp(amount, key, headFileNames)
  }
  checkForParts()
}

const fillUp = (amount, key, array, hard = true) => {
  if (hard) {
    optionsArea.innerHTML = ''
  }
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('DIV')
    div.id = 'div-' + key + '-' + i
    let img = document.createElement('IMG')
    if (key == 'eyes') {
      img.src = `./assets/images/skins/${i}-eyes.svg`
    } else if (key == 'mouth') {
      img.src = `./assets/images/skins/${i}-mouth.svg`
    } else if (key == 'extras') {
      img.src = `./assets/images/skins/${i}-extras.svg`
    } else {
      img.src = `./assets/images/skins/${array[i]}`
    }
    img.style.width = '110%'
    img.id = 'img-' + key + '-' + i
    img.draggable = 'false'
    img.style.webkitUserDrag = 'none'
    img.classList = 'select-none part transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-75'
    div.classList = 'select-none flex items-center justify-center bg-gray-200 border-gray-300 border-4 lg:w-16 lg:h-16 w-8 h-8 m-2 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
    div.innerHTML = img.outerHTML
    optionsArea.append(div)
  }
}

const fillUpVirtual = (amount, key, array) => {
  let optionsArea = document.createElement('DIV')
  optionsArea.classList = 'hidden absolute virtual-options'
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('DIV')
    div.id = 'div-' + key + '-' + i
    let img = document.createElement('IMG')
    if (key == 'eyes') {
      img.src = `./assets/images/skins/${i}-eyes.svg`
    } else if (key == 'mouth') {
      img.src = `./assets/images/skins/${i}-mouth.svg`
    } else if (key == 'extras') {
      img.src = `./assets/images/skins/${i}-extras.svg`
    } else {
      img.src = `./assets/images/skins/${array[i]}`
    }
    img.style.width = '110%'
    img.id = 'img-' + key + '-' + i
    img.draggable = 'false'
    img.style.webkitUserDrag = 'none'
    img.classList = 'select-none transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-75 virtual-part-' + key
    div.classList = 'select-none flex items-center justify-center bg-gray-200 border-gray-300 border-4 lg:w-16 lg:h-16 w-8 h-8 m-2 hover:border-gray-400 hover:bg-gray-100 rounded-full cursor-pointer'
    div.innerHTML = img.outerHTML
    optionsArea.append(div)
    document.body.append(optionsArea)
  }
}

document.querySelector('#emoji_search_big').addEventListener('keyup', (event) => {
  let search = event.target.value
  let results = headFileNames.filter((file) => file.includes(search))
  fillUp((results.length + 1), 'search', results)
  checkForParts()
})

document.querySelector('#emoji_search').addEventListener('keyup', (event) => {
  let search = event.target.value
  let results = headFileNames.filter((file) => file.includes(search))
  console.log(results)
  fillUp(results.length, 'search', results)
  checkForParts()
})

/*
* Listen for the reset command
*/
const resetStage = () => {
  let staging = document.querySelector('#staging')
  staging.querySelectorAll('img').forEach((img) => {
    if (!img.parentNode.classList.contains('inner')) {
      img.style.width = '110%'
      img.classList = 'select-none part transform duration-150 hover:-rotate-12 hover:scale-110'
      let id = img.id.split('-')
      let home = document.querySelector('#div-' + id[1] + '-' + id[2])
      if (home == null || home.querySelector('img')) {
        img.remove()
      } else {
        home.append(img)
      }
    }
    checkForPart(img)
  })
  document.querySelector('#pieces').innerHTML = ''
}
document.querySelector('#reset').addEventListener("click", resetStage)

/*
* Trash the emoji bit
*/
window.trash = (id) => {
  let target = document.querySelector('#' + id)
  let key = target.id.split('-')
  let img = document.querySelector('#img-' + key[1] + '-' + key[2])
  if (img) {
    img.style.width = '110%'
    img.classList = 'select-none part transform duration-150 hover:-rotate-12 hover:scale-110 active:scale-75'
    let home = document.querySelector('#div-' + key[1] + '-' + key[2])
    if (home == null || home.querySelector('img')) {
      img.remove()
    } else {
      home.append(img)
    }
  }
  checkForPart(img)
  target.remove()
  if (document.querySelector('#options-hold')) document.querySelector('#options-hold').remove()
}

/*
* Listen for the download command
*/
document.querySelector('#download').addEventListener("click", () => {
  document.querySelector('#download-arrow').classList.add('animate-download')
  setTimeout(() => {
    document.querySelector('.checkmark').style.display = 'block'
    setTimeout(() => {
      domtoimage.toBlob(document.getElementById('staging'))
        .then((blob) => {
          let name = document.querySelector('#name').value ? document.querySelector('#name').value : 'youmoji'
            FileSaver.saveAs(blob, name + '.png')
        })
    }, 400)
      setTimeout(() => {
        document.querySelector('#download-arrow').classList.remove('animate-download')
        document.querySelector('.checkmark').style.display = 'none'
      }, 1500)
  }, 1500)
})

/*
* Allow sorting of the parts
*/
const sortable = Sortable.create(sort, {
    animation: 150,
    easing: "cubic-bezier(1, 0, 0, 1)",
    onEnd: () => {
        reorderZIndex()
  	},
})

const reorderZIndex = () => {
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
}


const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const rando = (type, ms) => {
  return new Promise(async (resolve) => {
    let parts = document.querySelectorAll('.virtual-part-' + type)
      for (let i = 0; i < 10; i++) {
        let randomPart = parts[Math.floor(Math.random() * (parts.length - 1))]
        partsCreate(randomPart, false)
        await sleep(80)
        let key = randomPart.id.split('-')
        let id = 'div-' + key[1] + '-' + key[2] + '-piece'
        if (i != 9) {
          trash(id)
        }
      }
      setTimeout(resolve, ms)
    })
}

window.randomizer = async () => {
  dice.removeEventListener("click", rollDice);
  let showExtras = Math.random() < 0.5
  resetStage()
  fillOptions('head', true)
  fillOptions('eyes', true)
  fillOptions('mouth', true)
  if (showExtras) fillOptions('extras', true)
  await rando('head', 850)
  rando('eyes', 850)
  if (showExtras) {
    rando('mouth', 850)
    await rando('extras', 850)
  } else {
    await rando('mouth', 850)
  }
  document.querySelectorAll('.virtual-options').forEach((el) => el.remove())
  dice.addEventListener("click", rollDice);
}

const ele = document.querySelector('.op-wrap');
ele.scrollLeft = 111;
const mouseMoveHandler = function(e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
  console.log(ele.scrollLeft)
};
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function(e) {
    console.log('down')
      pos = {
          // The current scroll
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
      };

      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

                  document.querySelector('.op-wrap').addEventListener('mousemove', mouseMoveHandler);
                  document.querySelector('.op-wrap').addEventListener('mouseup', mouseUpHandler);
  };

  const mouseUpHandler = function() {
          console.log('up')
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
    document.querySelector('.op-wrap').removeEventListener('mousemove', mouseMoveHandler);
    document.querySelector('.op-wrap').removeEventListener('mouseup', mouseUpHandler);
  };
document.querySelector('.op-wrap').addEventListener('mousedown', mouseDownHandler);
  twemoji.parse(document.body)
    // Init
    var container = document.getElementById("logo-container"),
      inner = document.getElementById("logo");

    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(event) {
      update(event);
    };

    var onMouseLeaveHandler = function() {
      inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //-----------------------------------------

    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x * 2 + "deg) rotateY(" + y * 2 + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //-----------------------------------------

    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;

    let dice = document.getElementById('dice');

function rollDice() {
  let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  dice.dataset.side = result;
  dice.style.transition = 'transform 2.5s ease-out';
  dice.classList.toggle("reRoll");
}

dice.addEventListener("click", rollDice);

twemoji.parse(document.body)
fillOptions('head')
