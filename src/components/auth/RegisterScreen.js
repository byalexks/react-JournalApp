import React from 'react'
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
      <>
        <h3 className="auth__title mb-5">Register</h3>
        <form>
          <input
            autoComplete="off"
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
          />

          <input
            autoComplete="off"
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
          />

          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
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
