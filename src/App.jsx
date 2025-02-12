import React from "react"
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar.jsx";


const App = () => {
  const [ bookDetails, setBookDetails] = useState({});


  const getBooks = async() => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
    const jsonObj = await response.json();
    
  }
getBooks();
  return (
    <>
      <NavBar />

        <h1>Book Buddy</h1>
    </>
  )
}

export default App
