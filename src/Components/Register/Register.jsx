import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";
import AuthProvider, { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {
  const [user, setUser] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {createUser, name1} = useContext(AuthContext); 
  const handleRegister = (event) => {
    event.preventDefault();
    
    
    console.log(name1)
    console.log(accepted);
    
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoUrl);
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setUser(loggedUser);
        setSuccess("User Created Successfully ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col   ">
        <div className="text-center lg:text-left">
          <h1 className="md:text-5xl font-bold mb-4">Register Now !</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="form-control">
                <label className="cursor-pointer flex mt-2 gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={() => setAccepted(!accepted)}
                  />
                  <span className="text-sm mt-0">
                    Accept{" "}
                    <Link className="text-blue-400">Terms And Condition</Link>
                  </span>
                </label>
              </div>
            </div>
            {
                error && <p>{error}</p>
            }
            {
                success && <p>{success}</p>
            }
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={!accepted}>Register</button>
            </div>
            <p className="text-sm">
              Already Have An Account ?{" "}
              <Link className="text-red-400" to="/login">
                Login
              </Link>
            </p>
            <SocialLoginButton></SocialLoginButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
