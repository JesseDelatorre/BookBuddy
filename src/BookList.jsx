import { useState, useEffect } from 'react'


const BookList = (props) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      const jsonObj = await response.json();
      const retrievedBooks = jsonObj.books;
      // console.log(retrievedBooks);
      setAllBooks(retrievedBooks);
    }

    getBooks();
  }, []);


  return (
    <>
      <ol>
        {
          allBooks.map((singleBook) => {

            return (
              <li key={singleBook.id}>
                {singleBook.title}, {singleBook.id}
              </li>
            )
          })
        }
      </ol>

    </>
  )
}

export default BookList