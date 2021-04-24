import React, { useState } from 'react';

interface Props {
  login: Function
  companyLogin: Function
}

const LogIn: React.FC<Props> = (props) => {

  const [email, setEmail] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');

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
            <button type="button" className="login-button" onClick={() => props.login(email)}>Log In</button>
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
            <input type="text" id="company-email-input" onChange={(e) => {
              setCompanyEmail(e.target.value);
            }}></input>
          </div>
          <div className="password-input-div">
            <label htmlFor="company-password-input">Password</label>
            {' '}
            <input type="password" id="company-password-input"></input>
          </div>
          <div>
            <button type="button" className="login-button" onClick={() => props.companyLogin(companyEmail)}>Log In</button>
          </div>
        </div>
      </section>
      <div className="forgot-pass-div">
        <span className="forgot-password">Forgot Your Password?</span>
      </div>
    </div>
  )
}

export default LogIn;