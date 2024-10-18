import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeroesRoutes } from '../../heroes/routes/HeroesRoutes';

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/marvel",{ replace: true})
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogin}
        >
          Login
        </button>
    </div>

    
  )
}
