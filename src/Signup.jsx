import { useState } from 'react'

const Signup = () => {

  const [emailInput, setEmailInput] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');


  const createUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailInput,
          firstname: firstNameInput,
          lastname: lastNameInput,
          password: passwordInput
        })
      });


      const user = await response.json();
      
      if(user.error) {  
      } else {
        setEmailInput('');
        setFirstNameInput('');
        setLastNameInput('');
        setPasswordInput('');
      }
    } 
      catch(err) {
        console.log(`Error`, err);
      }
    }

  return(
    <form onSubmit={createUser}>
      <input placeholder="Email"
      type="email"
      onChange={(event) => { setEmailInput(event.target.value) }}
      value={emailInput}
      />

      <input placeholder="First name"
      onChange={(event) => { setFirstNameInput(event.target.value) }}
      value={firstNameInput}
      />

      <input placeholder="Last name"
      onChange={(event) => { setLastNameInput(event.target.value) }}
      value={lastNameInput}
      />

      <input placeholder="Password"
      onChange={(event) => { setPasswordInput(event.target.value) }}
      value={passwordInput}
      />

      <button>Submit</button>
    </form >
  )
}

export default Signup