import React from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                     {/* <Link className="nav-link" to="/about">About</Link> */}
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true" href='#'>Disabled</a>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className="btn-group" role="group" aria-label="Basic example" style={{marginRight : '20px'}}>
                    <button type="button" className="btn btn-secondary" style={{backgroundColor : '#363062'}} value="blue" onClick = {(e)=> props.changeModeColor(e.target.value)}>Blue</button>
                    <button type="button" className="btn btn-secondary" style={{backgroundColor : '#435585'}} value="grey" onClick = {(e)=> props.changeModeColor(e.target.value)}>Grey</button>
                    <button type="button" className="btn btn-secondary" style={{backgroundColor : '#32012F'}} value="purple" onClick = {(e)=> props.changeModeColor(e.target.value)}>Purple</button>
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
                </div>
                </div>
            </div>
        </nav>
        </>
  )
}
