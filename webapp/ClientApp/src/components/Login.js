import React, { Component } from 'react';
import './/css/Login.css';
export class Login extends Component {
  static displayName = Login.name;

  render() {
      return (
          <div className="centreren_login">
              <h1>Login</h1>
              <br />

              <div className="container">
                  <label for="uname"><b>Username</b></label>
                  <br />

                  <input type="text" placeholder="Enter Username" name="uname" required />
                  <br />

                  <label for="psw"><b>Password</b></label>
                  <br />

                  <input type="password" placeholder="Enter Password" name="psw" required />
                  <br />

                  <button type="submit">Login</button>
                  <br />

                  <div className="container">
                      <div className="row">
                          <div className="col-6">
                              <p>Registreren? klik <a href="/registreren">hier!</a></p>
                          </div>
                          <div className="col-6">
                              <p>Forgot <a href="/">password?</a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
