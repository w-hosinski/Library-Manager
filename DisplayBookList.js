const DisplayBookList = () => {
    document.getElementById("bookList").innerText = ""
    for (let book of bookList) {
        document.getElementById("bookList").innerHTML += book.name + " by " + book.author + "<br>"
    }  
}
export default DisplayBookList