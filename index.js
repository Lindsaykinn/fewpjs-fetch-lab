function main(){
  return document.getElementById('main')
}

function resetMain(){
  main().innerHTML = '';
}

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json)); 
}

function fetchFifthCharacter(){
  return fetch('https://anapioficeandfire.com/api/characters/5')
  .then(resp => resp.json())
  .then(json => renderFifthCharacter(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

function renderFifthCharacter(characters){
  resetMain();
  const main = document.querySelector('main')
  characters.forEach(character => {
    const h5 = document.createElement('h5')
    h5.innerHTML = character.name
    main.appendChild(h5)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetchFifthCharacter()
})
