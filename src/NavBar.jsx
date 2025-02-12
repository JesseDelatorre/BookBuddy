import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/booklist'>Book List</Link>
      <Link to='/Login'>Login</Link>
    </nav>

  )
}

export default NavBar