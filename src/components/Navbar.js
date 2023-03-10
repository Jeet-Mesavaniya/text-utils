import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(vinput) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${vinput.mode} bg-${vinput.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{vinput.nameT}</Link> */}
        <a className="navbar-brand" href="#">{vinput.nameT}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/About">{vinput.aboutText}</Link>
            </li> */}
          </ul>
          <div>
          <div className={`form-check form-switch tex-${vinput.mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={vinput.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
      </div>
    </nav>
    </>
  )
}

Navbar.prototype = {
    nameT : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    nameT : "project name",
    aboutText : "about project here"
}