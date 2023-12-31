import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLoginButton from "../SocialLoginButton/SocialLoginButton";
import AuthProvider, { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {
  const [user, setUser] = useState(null);
  const [show,setShow] = useState(false)
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {createUser, name1,updateNamePhoto} = useContext(AuthContext); 
  const navigate = useNavigate()
  const refresh = () =>{
    window.location.reload();
}
  const handleRegister = (event) => {
    event.preventDefault();
    
    
    console.log(name1)
    console.log(accepted);
    
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if(password.length<6){
        setError("Password Must Be Six Character")
        return
      }
    console.log(name, email, password, photoUrl);
    setSuccess('');
    
    setError('')
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        
        console.log(loggedUser)
        setUser(loggedUser);
        updateNamePhoto(name,photoUrl)
        form.reset();
        setSuccess("User Created Successfully ");
        refresh()
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
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered relative"
                required
              />
              <p onClick={()=>setShow(!show)}>
                <button className="absolute left-[320px] top-[360px]" >
                    {
                        show ? <span><FaEyeSlash></FaEyeSlash></span> :  <span><FaEye></FaEye></span>
                    }
                </button>
              </p>
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
                error && <p className="text-red-600">{error}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            }
            <div className="form-control mt-6">
              <button className="btn btn-primary " disabled={!accepted}>Register</button>
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
