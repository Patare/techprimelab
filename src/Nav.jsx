import React from 'react';
import './index.css';

const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col-2 col-lg-1 m-0 p-0 navbar-logo-container">
                    <div>
                        <img 
                            src="https://media.glassdoor.com/sqll/1397116/techprimelab-software-squarelogo-1530711736581.png" 
                            alt="" 
                            className="float-left bg-light p-0 rounded-circle navbar-logo" 
                        />
                    </div>              
                </div>
                <div className="col-10 p-2 border head_icons">
                    
                <h1 className="text-warning float-left mt-4 font-weight-bold navbar-title">
                        TECHPRIMELAB <br />
                        <span className="navbar-subtitle">Software Pvt. Ltd.</span>
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Navbar;
