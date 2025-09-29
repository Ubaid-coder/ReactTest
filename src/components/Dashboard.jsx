import './dashboard.css'

function Dashboard({ user }) {
  const handleSignOut = () => {
    fetch('http://localhost:5000/signOut', {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
      .then(data => {
        alert(data);
        window.location.reload();
      })
  }
  return (
    <>
      <h1 className='dashboard'>Welcome to the Dashboard!</h1>
      <p className='dashboard-msg'> {user} you are successfully logged in.</p>
      <button onClick={handleSignOut}>Sign-Out</button>
    </>
  )
}

export default Dashboard