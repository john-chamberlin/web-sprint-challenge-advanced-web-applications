import React, { useEffect, useState } from "react";
import axios from "axios";


const initialState = {
    username: '',
    password: ''
}

const Login = (props) => {
  const [formData, setFormData] = useState(initialState)
  const [isUserValid, setIsUserValid] = useState(true)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChanges = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault()
    if(formData.username === 'Lambda School' || formData.password !== 'i<3Lambd4'){
      setIsUserValid(false)
    } else {
      axios.post('http://localhost:5000/api/login', formData)
        .then(res=> {
          console.log(res)
          setFormData(initialState)
          localStorage.setItem('token', res.data.payload)
          props.history.push('/bubbles')
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }

  return (
    <>
      <form onSubmit={login} className='login-form'>
        <p className='error'>{isUserValid ? '' : 'Username or Password not valid'}</p>
        <label>
          Username: 
          <input
            id='username'
            type='text'
            name='username'
            onChange={handleChanges}
            value={formData.username}
          />
        </label>
        <label>
          Password:
          <input 
            id='password'
            type='password'
            name='password'
            onChange={handleChanges}
            value={formData.password}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.