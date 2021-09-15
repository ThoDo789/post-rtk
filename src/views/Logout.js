import React from 'react'
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history= useHistory()
  const onLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    history.push('/login');
  };
  return (
    <>
      <div className="container mx-auto">
            Welcome back <h3>{localStorage.getItem('username')}</h3>
          </div>

          <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
    </>
  )
}

export default Logout
