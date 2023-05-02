import React, { useContext, useState } from "react";
import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const from = location.state?.from.pathname || '/';
    const navigate = useNavigate()
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            setUser(loggedUser)
            form.reset()
            setSuccess('User Created Successfully ')
            navigate(from)
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (

    <div className="hero min-h-screen bg-base-200">
      <form onSubmit={handleLogin} className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-sm">Don't Have An Account ? <Link className="text-red-400" to="/register">Register</Link></p>
            <SocialLoginButton></SocialLoginButton>
          </div>
        </div>
      </form>
      
    </div>
    
  );
};

export default Login;
