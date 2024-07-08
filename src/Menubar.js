import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css'; 
const Menubar = () => {
    const redirect = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('loggedIn');
        redirect('/');
    };

    return (
        <div className="menubar-container">
            {/* Desktop View (Vertical) */}
            <div className="d-none d-lg-block col-2 col-lg-7 p-1 m-1 menubars" style={{ height: "613px", backgroundColor: "rgb(8, 105, 189)" }}>
            <NavLink to="/dashbord">
                    <p className="menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none">
                        <i className="fa fa-gauge-high mr-2"></i> 
                    </p>
                </NavLink>
                <NavLink to="/projectlist">
                    <p className="menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none">
                        <i className="fa-solid fa-list mr-2"></i> 
                    </p>
                </NavLink>
                <NavLink to="/addproject">
                    <p className="menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none">
                        <i className="fa-solid fa-plus mr-2"></i> 
                    </p>
                </NavLink>
                <hr className="m-0 bg-dark" />
                <hr className="m-0 bg-dark" />
                <p className="menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none" type="button" onClick={handleLogout}>
                    <i className="fa-solid fa-arrow-left mr-3"></i> 
                </p>
                <hr className="m-0 bg-dark" />
            </div>

            {/* Mobile View (Horizontal Bottom) */}
            <div className="d-block d-lg-none">
                <nav className="menubar-horizontal fixed-bottom">
                    <ul className="nav justify-content-around" >
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashbord"><i className="fas fa-home text-white"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projectlist"><i className="fa-solid fa-list text-white"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addproject"><i className="fas fa-plus text-white"></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" onClick={handleLogout}><i className="fas fa-arrow-left text-white"></i></p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menubar;
