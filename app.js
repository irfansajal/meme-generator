const generateMemeBtn = document.querySelector('.meme-genaretor .generate-meme-btn')
const memeImage = document.querySelector('.meme-genaretor img')
const memeTitle = document.querySelector('.meme-genaretor .meme-title')
const memeAuthor = document.querySelector('.meme-generator .meme-author')


const updateDetails =(url,title,author) =>{
    memeImage.setAttribute('src', url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () =>{
    fetch(' https://meme-api.com/gimme')
    .then(res => res.json() )
    .then(data => {
       console.log(data) 
    updateDetails(data.url,data.title,data.author)
    })
  
}
generateMemeBtn.addEventListener('click',generateMeme)