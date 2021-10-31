import DisplayBookList from  "./DisplayBookList.js"

const AddBook = () => {
    class Book {
        constructor(name, author) {
          this.name = name
          this.author = author
        }
    }
    const temp = new Book(submitNewBookTitle.value,submitNewBookAuthor.value)
    bookList.push(temp)
    DisplayBookList()
}
export default AddBook