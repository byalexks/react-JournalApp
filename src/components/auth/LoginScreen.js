import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";


export const LoginScreen = () => {

  const dispatch = useDispatch();
  
  const [formValues, handleInputChange] =  useForm({
    email: 'alex@gmail.com',
    password: '123456'
  })

  const { email, password } = formValues;

  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));

    
  }
  const handleGoogleSignIn=(e)=>{
    dispatch(startGoogleLogin());

  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>login with social network</p>
          <div onClick={handleGoogleSignIn} className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>

          <Link className="link" to="/auth/register">
            Create a new account
          </Link>
        </div>
      </form>
    </>
  );
};
