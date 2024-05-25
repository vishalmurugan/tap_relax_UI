import React, { useEffect, useState,useContext } from "react";
import "./vertical-navBar.css";
import { Link, useLocation,useNavigate } from "react-router-dom";
import navLogo from "../../../assets/nav-logo.svg";
import  GlobalStore  from "../../../Store";

const VerticalNavBar = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {getProfile}= useContext(GlobalStore);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(()=>{},[])

  return (
    <div>
      <div className="app">
        <div id="sidenav">
          <div className="top-nav">
            <div className="logo">
              <img src={navLogo} alt="navLogo" />
              <a href="#" className="nav-icon pull-right" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
              </a>
            </div>
            <div className="px-5">
            <button type="button"
              className="btn btn-success" onClick={()=>navigation('/user/choose-card')}>Buy New Product</button>
            </div>
            <div className="text-right me-3 d-flex">
            
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-person-circle mt-2 me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </span>
              <Link  className="" style={{ fontSize: "19px", color: 'white', textDecoration: 'none' }}>Account</Link>
            </div>
          </div>
          <div className="wrapper">
            <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
              <div className="nav-rounded-image mt-5">
                          <img
                              className="rounded-circle landline-icon"
                              src={process.env.REACT_APP_SERVERURL+(getProfile?.photo ||'default.svg')}
                              height={150}
                              width={150}
                              alt="landlineicon"
                            />
              </div>
              <ul className="bg-transparent">
                <li>
                  <NavItem to="/user/my-cards">My Cards</NavItem>
                </li>
                <li><NavItem to="/user/my-standee">My Standee</NavItem></li>
                <li><NavItem to="/user/profile">Profile</NavItem></li>
                <li><NavItem to="/user/orders">My Orders</NavItem></li>
                <li><NavItem to="/user/contact">Contact</NavItem></li>
                {/* <li><NavItem to="/user/rewards">Rewards</NavItem></li> */}
                <li className="ms-auto"><NavItem to="/login" onClick={()=>localStorage.clear()}>Logout</NavItem></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

  function NavItem({ to, children }) {
    const isActive = location.pathname.includes(to);
    return (
      <Link className={`navbar-items ${isActive ? "active" : ""}`} to={to}>
        {children}
      </Link>
    );
  }
};

export default VerticalNavBar;
