import React from 'react'
import validator from "validator";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui)
  

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email ,password, password2 } = formValues;

  const handleRegister =(e) => {
      e.preventDefault();

      if (isFormValid()) {
         dispatch(startRegisterWithEmailPasswordName(email, password, name));
        
      }

}

  const isFormValid=()=>{
      if (name.trim().length === 0) {
        dispatch(setError("name is required"));
        return false;
      } else if (!validator.isEmail(email)) {
        dispatch(setError("email is not valid"));
        return false;
      } else if (password !== password2 || password2 < 5) {
        dispatch(
          setError(
            "passowrd should be at least 5 characters and match each other"
          )
        );
        return false;
      }

    dispatch(removeError)
    return true;
  }
    return (
      <>
        <h3 className="auth__title mb-5">Register</h3>
        <form onSubmit={handleRegister}>

        {
          msgError &&

          (<div className="auth__alert-error">
            {msgError}
          </div>)
        
        }

          <input
            autoComplete="off"
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            value={name}
            onChange={handleInputChange}
          />

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

          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
            value={password2}
            onChange={handleInputChange}
          />

          <button className="btn btn-primary btn-block mb-5" type="submit">
            Register
          </button>
          <hr />
          <Link className="link mt-5" to="/auth/login">
            Already registered?
          </Link>
        </form>
      </>
    );
}
