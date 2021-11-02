const DisplayBookList = () => {
    document.getElementById("bookList").innerHTML = `
    <colgroup>
    <col id="titleColumn">
    <col id="authorColumn">
    </colgroup>
    <tr>
    <th id="titleHeader">Book Title</th><th id="authorHeader">Book Author</th></tr>`
    for (let book of bookList) {
        document.getElementById("bookList").innerHTML += `<tr> <td>${book.name}</td> <td>${book.author}</td> </tr>`
    }
}
export default DisplayBookList