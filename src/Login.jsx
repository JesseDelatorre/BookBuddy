import { useState } from 'react';



const Login = ({setToken}) => {

const [loginEmailInput, setLoginEmailInput] = useState('');
const [loginPasswordInput, setLoginPasswordInput] = useState('');



  const logIn = async(event) => {
event.preventDefault();

try{
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginEmailInput,
        password: loginPasswordInput
      })
    });
    const tokenObj = await response.json();
    setToken(tokenObj.token)
    console.log(tokenObj.token);
  } catch(err) {
    console.log(err);
  }
}

  return(
    <>
<form onSubmit={logIn}>
  <input placeholder="Email"
  onChange= { (event) => { setLoginEmailInput(event.target.value) } }
  />
  <input placeholder="Password"
  onChange= { (event) => { setLoginPasswordInput(event.target.value) } }
  />

  <button>Login</button>
</form>
    </>
  )
}

export default Login