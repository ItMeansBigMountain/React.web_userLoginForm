// IMPORT REACT
import React from 'react'
import { useState, useEffect } from 'react';



// IMPORT CSS
import '../static/LoginForm.css';





const LoginForm = () => {


  const [email_input, setEmail] = useState("")
  const [password_input, setPassword] = useState("")



  function ValidateEmail() {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email_input)
    ) { return (true) }

    alert("You have entered an invalid email address!")
    return (false)
  }

  function ValidatePassword() {
    if (password_input.length < 6) {
      alert("Password must be at least 6 characters.")
      return false
    }
    return true
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    var email = event.target[0].value
    var password = event.target[1].value
    let valid = false;


    if (ValidateEmail() && ValidatePassword()) {
      //ROUTE TO PROFILE PAGE
      alert("Email Verified!")
    }
    else {
      //STAY ON LOGIN PAGE
    }


  }


  return (

    <>

      <form onSubmit={handleSubmit}>

        <label>Username:
          <input onChange={(e) => { setEmail(e.target.value) }} type="text" />
        </label>

        <label>Password:
          <input onChange={(e) => { setPassword(e.target.value) }} type="text" />
        </label>

        <input type="submit" />

      </form>

    </>

  )
}

export default LoginForm