import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function SignUP() {
  const router = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/verify', {
      method: 'GET',
      credentials: 'include'
    }).then(res => res.json())
      .then(data => {
        if (data.loggedIn) {
          router('/')
        }
      })
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let email = e.target.email.value;

    fetch('http://localhost:5000/signUp', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        email
      })
    }).then(res => res.json())
      .then(data =>
        router('/SignIn')
      )

    e.target.reset();


  }
  return (

    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <h2>Create Account</h2>

          <label htmlFor="username">User Name:</label>
          <input required type="text" id="username" placeholder="Enter Your Name" />

          <label htmlFor="password">Password:</label>
          <input required type="password" id="password" placeholder="Enter Your Password" />

          <label htmlFor="email">E-mail:</label>
          <input required type="email" id="email" placeholder="Enter Your E-mail" />

          <button type="submit">Sign-Up</button>

        </form>
        <label htmlFor="account">Already have account?</label>
        <Link id="account" to={"/SignIn"}> Login Account</Link>
      </div>
    </div>

  )
}

export default SignUP;