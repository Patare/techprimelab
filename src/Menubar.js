import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';
const Menubar = () => {
    const redirect = useNavigate();
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    const handleLogout = () => {
        sessionStorage.removeItem('data');
        redirect('/');
    };

    return (
        <div className="menubar-container">

            {/* Desktop View (Vertical) */}
            <div className="d-none d-lg-block col-2 col-lg-5 p-1 m-0 menubars" style={{ height: "768px", width: "58px" }}>
                <NavLink
                    to="/dashbord"
                    className={({ isActive }) => `menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none ${isActive ? 'active' : ''}`}
                    onClick={() => handleButtonClick('dashbord')}
                >
                    <img src="img/Dashboard-active.svg" alt="" />
                </NavLink>
                <NavLink
                    to="/projectlist"
                    className={({ isActive }) => `menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none ${isActive ? 'active' : ''}`}
                    onClick={() => handleButtonClick('projectlist')}
                >
                    <img src="img/Project-list-active.svg" alt="" />
                </NavLink>
                <NavLink
                    to="/addproject"
                    className={({ isActive }) => `menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none ${isActive ? 'active' : ''}`}
                    onClick={() => handleButtonClick('addproject')}
                >
                    <img src="img/create-project-active.svg" alt="" />
                </NavLink>
                <hr className="m-0 " />
                <p className="menubtn btn text-left pl-4 w-100 p-2 mt-3 mb-0 border-none leftArrow mt-5" type="button" onClick={handleLogout}>
                    {/* <i className="text-primary fas fa-sign-out-alt mr-3"></i>  */}
                    <img src="img/logout.svg" alt="" />

                </p>
            </div>



            {/* Mobile View (Horizontal Bottom) */}
            <div className="d-block d-lg-none mt-5 mb-5">
                <nav className="menubar-horizontal fixed-bottom">
                    <ul className="nav justify-content-around" >
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashbord">
                                <img src="img/Dashboard-active.svg" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projectlist">
                                <img src="img/Project-list-active.svg" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addproject">

                                <img src="img/create-project-active.svg" alt="" />
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <p className="nav-link" onClick={handleLogout}><i className="fas fa-arrow-left text-white"></i></p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menubar;



