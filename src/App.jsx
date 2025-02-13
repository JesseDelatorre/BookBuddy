import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar.jsx";
import BookList from "./BookList.jsx";
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import BookDetails from './BookDetails.jsx';



const App = () => {
  // const [allBookDetails, setAllBookDetails] = useState({});
  const [token , setToken] = useState('');
  

  return (
    <>
      <NavBar />

      <h1>Book Buddy</h1>

      <Routes>
        <Route path='/' element={<h2>Welcome!</h2>} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/booklist/:id' element={<BookDetails/>}/>
        <Route path='/login' element={<Login setToken={setToken}/>} />
        <Route path='/signup' element={<Signup setToken={setToken}/>} />
      </Routes>
    </>
  )
}

export default App
