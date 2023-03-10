import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./sidebar.css";
import logo from "../../Assets/Images/logo.png";
import home from "../../Assets/Icons/home_icon.png";
import wallet from "../../Assets/Icons/wallet.png";
import invest from "../../Assets/Icons/invest.png";
import msg from "../../Assets/Icons/chat.png";
import bell from "../../Assets/Icons/bell.png";
import mark from "../../Assets/Icons/mark.png";
import { Col, Row } from "react-bootstrap";
const Sidebar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div>
      <header>
        <Row><Col><a to="/"  >
          <img src={logo} alt="" style={{ width: "132px" }} />
        </a></Col>
        
        <nav ref={navRef}>
          <div className="nav-link">
            <Row>
              <Col  className="col2">
                <img className="icons" src={home} alt="" />
              </Col>
              <Col xs={9} className="col1">
                {" "}
                <a to="/">
                  <p>Home</p>
                </a>
              </Col>
            </Row>
            
            <Row>
              <Col className="col2">
                <img className="icons" src={wallet} alt="" />
              </Col>
              <Col xs={9} className="col1">
                <a to="/wallet">Wallet</a>
              </Col>
            </Row>

            <Row>
              <Col className="col2">
                <img className="icons" src={invest} alt="" />
              </Col>
              <Col xs={9} className="col1">
                <a to="/invest">Invest</a>
              </Col>
            </Row>

            <Row>
              <Col className="col2">
                <img className="icons" src={msg} alt="" />
              </Col>
              <Col xs={9} className="col1">
                <a to="/message">Messages</a>
              </Col>
            </Row>

            <Row>
              <Col className="col2">
                <img className="icons" src={bell} alt="" />
              </Col>
              <Col xs={9} className="col1" >
                <a to="/notification">Notification</a>
              </Col>
            </Row>
            <Row><Col >
            <a href=""><img className="icon"  src={mark} alt="" /></a></Col></Row>
            <button
              className="nav-btn  nav-close-btn my-3"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </div>
        </nav>
        
        <Col style={{textAlign:"end"}}><button className="nav-btn  "  onClick={showNavbar}>
          <FaBars />
        </button></Col></Row>
      </header>
    </div>
  );
};

export default Sidebar;
