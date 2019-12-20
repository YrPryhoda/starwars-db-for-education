import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
class Header extends React.Component {

  show = (e) => {
    document.querySelector('#after-and-toggler').classList.toggle('show');
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <Link className="navbar-brand" to="/">Star Wars DB</Link>
        <button onClick={(e) => this.show(e.target)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#after-and-toggler" aria-controls="after-and-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="after-and-toggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/people/">Heroes </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets/">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starships/">Starships</Link>
            </li>
          </ul>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item ">
              <Link className="nav-link my-admin" to="/admin"> <i class="fas fa-user-shield"></i>  For admin only</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;