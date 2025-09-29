import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function SignIn() {
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

    let id;

    const handleSubmit = (e) => {
        e.preventDefault();
        let password = e.target.password.value;
        let email = e.target.email.value;

        fetch('http://localhost:5000/signIn', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                password,
                email
            }),

        })
            .then(res => res.json())
            .then(data => {
                alert(data);
                id = data
                router('/')
            })
        e.target.reset();


    }


    return (
        <div className="login-container">
            <div className="login-card">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <label htmlFor="email">E-mail:</label>
                    <input required type="email" id="email" placeholder="Enter Your E-mail" />

                    <label htmlFor="password">Password:</label>
                    <input required type="password" id="password" placeholder="Enter Your Password" />


                    <button type="submit">Sign-In</button>

                </form>
                <label htmlFor="account" >Don't have account?</label>
                <Link to={'/SignUp'}> Create An Account</Link>
            </div>
        </div>
    )
}

export default SignIn;