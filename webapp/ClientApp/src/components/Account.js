import React, { Component } from 'react';
import './/css/Account.css';

export class Account extends Component {
  static displayName = Account.name;

  render() {
      return (
          <div className="container accountcontainer">
              <div className="row">
                  <div className="col-12 col-md-8">
                      <div className="inner-container">
                          <h4 className="titlecontent">Ervaring & Competenties</h4>
                      </div>
                  </div>
                  <div className="col-6 col-md-4">
                      <div className="inner-container">
                          <h4 className="titlecontent">Contactinformatie</h4>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}
