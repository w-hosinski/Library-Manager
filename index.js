import AddBook from "./AddBook.js"
import DisplayBookList from "./DisplayBookList.js"

window.bookList = []

const getNewBook = () => {
const request = new XMLHttpRequest() 
let randomNum = Math.ceil(Math.random() * 200)

request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
        let answer = request.responseText
        submitNewBookTitle.value = JSON.parse(answer).title
        console.log(request.responseText)
    }
    else if(request.readyState === 4) console.log("error when fetching the data")
})

request.open("GET", `https://jsonplaceholder.typicode.com/todos/${randomNum}`)
request.send()
}

document.getElementById("submitNewBook").addEventListener("click", AddBook)
document.getElementById("getRandomBook").addEventListener("click", getNewBook)