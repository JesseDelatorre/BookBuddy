import { useState, useEffect } from 'react';
import BookDetails from './BookDetails.jsx';
import singleBookDetails from './BookDetails.jsx';
import { useNavigate } from 'react-router-dom';


const BookList = () => {
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

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
                <h3>{singleBook.title}</h3>
                  {/* {singleBook.id}  */}
                  <button onClick= {()=>{navigate(`/booklist/${singleBook.id}`)}}>See Details</button>
              </li>
            )
          })
        }
      </ol>

    </>
  )
}

export default BookList