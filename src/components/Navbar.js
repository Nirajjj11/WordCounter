import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(props) {
    console.log(props)
    return (
        <>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <button className="navbar-brand" >Navbar</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" to='/' >Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" to='/about' >About</button>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle"   data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" >Action</button></li>
                                    <li><button className="dropdown-item" >Another action</button></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" >Something else here</button></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link " >Contact Us</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch mx-2  `} style={{color:props.mode === 'light' ? 'dark' :'light',  backgroundColor:props.mode === 'light' ? 'dark' :'light'}}>
                            <input className="form-check-input" onClick={props.toggelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode ==="light"?"dark":"light"} mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;