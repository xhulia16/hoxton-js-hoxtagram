type CommentData = {
    id: number
    content: string
    imageId: number
}

type Image = {
    id: number
    title: string
    likes: number
    image: string
    comments: CommentData[]
}

type State = {
    images: Image[]
}

let banana = [2, 4, 6]

let state: State = {
    images: []
}

console.log(state.images)
console.log('hi')

function getImagesFromServer() {
    fetch("http://localhost:5000/images")
        .then(resp => resp.json())
        .then(imagesFromServer => { state.images = imagesFromServer })
    renderCard()
}

function renderCard() {
    // solution goes here
    //<article class="image-card">
    //<h2 class="title">Title of image goes here</h2>
    //<img src="./assets/image-placeholder.jpg" class="image" />
    //<div class="likes-section">
    //  <span class="likes">0 likes</span>
    //  <button class="like-button">♥</button>
    //</div>
    //<ul class="comments">
    //  <li>Get rid of these comments</li>
    // <li>And replace them with the real ones</li>
    // <li>From the server</li>
    //</ul>
    //</article>

    let imageContainer: any = document.querySelector('.image-container')
    if (imageContainer === null) return
    imageContainer.textContent = ''

    for (let image of state.images) {

    let articleEl = document.createElement('article')
    articleEl.className = 'image-card'

    let h2El = document.createElement('h2')
    h2El.className = 'tittle'
    h2El.textContent = 'Title of image goes here'

    let imgEl = document.createElement('img')
    imgEl.className = 'image'
    imgEl.src = "./assets/image-placeholder.jpg"

    let divEl = document.createElement('div')
    divEl.className = 'likes-section'

    let spanEl = document.createElement('span')
    spanEl.className = 'likes'
    spanEl.textContent = '0 likes'

    let buttonEl = document.createElement('button')
    buttonEl.className = 'like-button'
    buttonEl.textContent = '♥'

    let ulEl = document.createElement('ul')
    ulEl.className = 'comments'

    let liEl = document.createElement('li')
    liEl.textContent = 'Get rid of these comments'

    divEl.append(spanEl, buttonEl)
    ulEl.append(liEl)
    articleEl.append(h2El, imgEl, divEl, ulEl)
    imageContainer.append(articleEl)
}}
getImagesFromServer()
renderCard()


