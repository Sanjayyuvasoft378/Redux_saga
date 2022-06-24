const Logout = () => {
    localStorage.removeItem('user-info');
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    window.location.href=('/')
  return (
    <>
            <h1>User is no more</h1>
            <button onClick={Logout}>logout</button>
          </>
  )
}
export default Logout