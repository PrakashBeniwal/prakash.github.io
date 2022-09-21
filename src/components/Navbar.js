import React from 'react'


  

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg " >
            <div className="container-fluid">
                <a className="navbar-brand  mx-5 "  href="/" style={{fontWeight:'bold'}}>Prakash</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align center  " style={{marginLeft:'300px'}}> 
                        <li className="nav-item mx-3">
                            <a className={`nav-a active }`} style={{fontWeight:'600'}} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className={`nav-a active`} style={{fontWeight:'600'}}  href="/about">Services</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className={`nav-a active`} style={{fontWeight:'600'}}  href="/about">Portfolio</a>
                        </li>

                    </ul>
                    <form className="d-flex"> 
                    <a className="btn btn mx-1" style={{backgroundColor:'orange',borderRadius:'25px'}} href="/login" role="button">Contact</a>
                   
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
