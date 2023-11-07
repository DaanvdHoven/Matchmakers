import React, { Component } from 'react';
import './/css/Registreren.css';
export class Registreren extends Component {
    static displayName = Registreren.name;

  

  render() {
    return (
        <div className="registreren_content">
        <h1>Registreren</h1>

            <div className="container">
                <label for="cname"><b>Naam bedrijf</b></label>
                <br />
                <input type="text" placeholder="Naam bedrijf" name="cname" required/>
                <br />
                <label for="fname"><b>Voornaam</b></label>
                <br />
                <input type="text" placeholder="Voornaam" name="fname" required />
                <br />
                <label for="lname"><b>Achternaam</b></label>
                <br />
                <input type="text" placeholder="Achternaam" name="lname" required />
                <br />
                <label for="psw"><b>Wachtwoord</b></label>
                <br />
                <input type="password" placeholder="Wachtwoord" name="psw" required/>
                <br />
                <button type="submit">Registreren</button>
                <p>Registreren als een organisatie? klik <a href="/login">hier!</a> </p>
                <br />
            </div>
      </div>
    );
  }
}
