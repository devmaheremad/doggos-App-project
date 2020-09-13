const myRequest = 'https://dog.ceo/api/breeds/list/all'
const select = document.getElementById('mydogstype')
const dogIcon = document.querySelector('.dog-icon')
const myCurrentImg = document.getElementById('my-img')

// * Get Random Photo
fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
    .then(data => {
        myCurrentImg.src = data.message
        myCurrentImg.title = 'Cute dog'
        myCurrentImg.alt = 'Cute dog'
        myCurrentImg.style.display = 'block'
        dogIcon.style.display = 'none'
    })

// * Get all breeds type
function GetAllBreedsType() {
    fetch(myRequest).then(response => response.json()).then(data => {
        const doggosType = Object.keys(data.message)

        doggosType.forEach(item => {
            const opt = document.createElement('option')
            opt.value = item
            opt.innerText = item
            select.appendChild(opt)
        })
    })
}

GetAllBreedsType()

// * Show my dogs
function showDogs() {
    select.addEventListener('change', e => {
        myCurrentImg.style.display = 'none'
        dogIcon.style.display = 'block'
        fetch(`https://dog.ceo/api/breed/${e.target.value}/images/random`).then(response => response.json())
            .then(data => {
                myCurrentImg.src = data.message
                myCurrentImg.title = 'Cute dog'
                myCurrentImg.alt = 'Cute dog'
                myCurrentImg.style.display = 'block'
                dogIcon.style.display = 'none'
            })
    })
}

showDogs()