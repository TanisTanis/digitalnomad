import React, { useState } from 'react';

let LogIn = (props) => {

  const [email, setEmail] = useState('');

  return (
    <div className="login-div">
      <section className="user-login-sec login-section">
        <div className="login-desc-div">
          <span className="login-desc">
            User Login
          </span>
        </div>
        <div>
          <div className="email-input-div">
            <label htmlFor="user-email-input">Email</label>
            {' '}
            <input type="text" id="user-email-input" onChange={(e) => {
              setEmail(e.target.value);
            }}></input>
          </div>
          <div className="password-input-div">
            <label htmlFor="user-password-input">Password</label>
            {' '}
            <input type="password" id="user-password-input"></input>
          </div>
          <div>
            <button type="button" onClick={() => props.login(email)}>Log In</button>
          </div>
        </div>
      </section>
      <section className="company-login-sec login-section">
        <div className="login-desc-div">
          <span className="login-desc">
            Company Login
          </span>
        </div>
        <div>
          <div className="email-input-div">
            <label htmlFor="company-email-input">Email</label>
            {' '}
            <input type="text" id="company-email-input"></input>
          </div>
          <div className="password-input-div">
            <label htmlFor="company-password-input">Password</label>
            {' '}
            <input type="password" id="company-password-input"></input>
          </div>
          <div>
            <button>Log In</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogIn;