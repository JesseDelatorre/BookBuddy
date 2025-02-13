import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


const singleBookDetails = () => {
  const {id} = useParams();
  const [singleBook, setSingleBook] = useState([]);

useEffect(() => {
    const getSingleBook = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      const jsonObj = await response.json();     
      const retrievedBook = jsonObj.book;
      setSingleBook(retrievedBook);
    }

    getSingleBook();
  }, []);
// console.log(singleBook);
  return(
    <>
    <h2>{singleBook.title}</h2>

    <img src={singleBook.coverimage} 
    alt={singleBook.title}
    />
    <h4>{singleBook.author}</h4>
    <p>{singleBook.available}</p>
    <p>{singleBook.description}</p>
    
    </>

  )
}

export default singleBookDetails
