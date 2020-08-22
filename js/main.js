let theme = localStorage.getItem('theme')

let themeIcon = document.querySelector('.theme-switcher i')

if (theme == null) {
    theme = 'light'
    setTheme(theme)
} else {
    setTheme(theme)
}

if (theme == 'light') {
    themeIcon.classList.add('fa-sun-o')
} else if (theme == 'night') {
    themeIcon.classList.add('fa-moon-o')
}

let themeButton = document.querySelector('.theme-switcher')
themeButton.setAttribute('data-mode', theme)

let rotate = true
themeButton.addEventListener('click', function () {
    var mode = themeButton.getAttribute('data-mode')
    if (mode == 'light') {
        themeButton.setAttribute('data-mode', 'night')
        themeIcon.classList.remove('fa-sun-o')
        themeIcon.classList.add('fa-moon-o')
    } else if (mode == 'night') {
        themeButton.setAttribute('data-mode', 'light')
        themeIcon.classList.remove('fa-moon-o')
        themeIcon.classList.add('fa-sun-o')
    }

    if (rotate) {
        themeIcon.classList.add('rotate')
    } else {
        themeIcon.classList.remove('rotate')
    }

    rotate = !rotate
    setTheme(this.dataset.mode)
})

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'css/style.css'
    } else if (mode == 'night') {
        document.getElementById('theme-style').href = 'css/night.css'
    }

    localStorage.setItem('theme', mode)
}

let workList = [{
    "id": 1,
    "img": "the-movie-catalogue.png",
    "title": "The Movie Catalogue",
    "kind": "Android",
    "desc": "Android Movie Catalogue that provides Movies and Series information based on TMDB",
    "link": "https://github.com/mfahmialkautsar/TheMovieCatalogue"
},
{
    "id": 2,
    "img": "movie-catalogue-liff.png",
    "title": "Movie Catalogue (LIFF)",
    "kind": "Web, LINE Front-end Framework",
    "desc": "Web-based Movie Catalogue integrated with LINE Front-end Framework",
    "link": "https://github.com/mfahmialkautsar/MovieCatalogue-LIFF"
},
{
    "id": 3,
    "img": "remember-me.png",
    "title": "Remember Me",
    "kind": "LINE Bot",
    "desc": "Notes bot, saves your notes and to-do list on every single LINE chat room separately",
    "link": "https://github.com/mfahmialkautsar/Remember-Me"
},
{
    "id": 4,
    "img": "game-catalogue-ios.png",
    "title": "Game Catalogue",
    "kind": "iOS",
    "desc": "iOS Game Catalogue that provides Games information based on RAWG.",
    "link": "https://github.com/mfahmialkautsar/GameCatalogue-iOS"
},]

function createWorkContainer(img, title, kind, desc, link) {
    const work = document.createElement('div')
    work.classList.add('work')

    const p = `
    <a class="no-decor text--main" href="${link}" target="_blank">
        <div class="image-container">
            <img src="${img}" alt="">
            <div class="kind text--white">${kind}</div>
        </div>
        <div id="work-text">
            <h3 class="title">${title}</h3>
            <p class="desc">${desc}</p>
        </div>
    </a>
    `
    work.innerHTML = p
    return work
}

let works = document.querySelector('#works')
function generateWorksBlock() {
    const projs = workList

    for (let i = 0; i < workList.length; i++) {
        const { id, img, title, kind, desc, link } = projs[i];

        const workContainter = createWorkContainer(img, title, kind, desc, link)
        works.appendChild(workContainter)
    }
}

generateWorksBlock()