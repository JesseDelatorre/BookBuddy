import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar.jsx";
import BookList from "./BookList.jsx";
import Login from './Login.jsx';
import Signup from './Signup.jsx';


const App = () => {
  const [allBookDetails, setAllBookDetails] = useState({});

  

  return (
    <>
      <NavBar />

      <h1>Book Buddy</h1>

      <Routes>
        <Route path='/' element={<h2>Welcome!</h2>} />
        <Route path='/booklist' element={<BookList />} />
        <Route path='/booklist/:id' element={<allBookDetails/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
