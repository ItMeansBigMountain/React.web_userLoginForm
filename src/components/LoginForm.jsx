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

    return (false)
  }




  const handleSubmit = (event) => {
    event.preventDefault();
    var email = event.target[0].value
    var password = event.target[1].value

    if (ValidateEmail(email)) {
      //ROUTE TO PROFILE PAGE
      alert("Email Verified!")
    }
    else {
      alert("You have entered an invalid email address!")
    }


  }


  return (



    <form onSubmit={handleSubmit}>

      <label>Username:
        <input onChange={(e) => { setEmail(e.target.value) }} type="text" />
      </label>

      <label>Password:
        <input onChange={(e) => { setPassword(e.target.value) }} type="text" />
      </label>

      <input type="submit" />

    </form>
  )
}

export default LoginForm