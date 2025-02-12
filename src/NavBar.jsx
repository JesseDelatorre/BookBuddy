import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/booklist'>Book List</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Sign up</Link>
    </nav>

  )
}

export default NavBar