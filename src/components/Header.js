import "./Header.css";
import Gnb from "./Gnb";
import Logo from "./LogoBtn";
import Profile from "./Profile";
import GuideBtn from "./GuideBtn";
import React, { useState } from 'react';
import LoginPopup from "./LoginPopup";

const Header = ({ isMember,setIsMember  }) => {
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    return (
        <div className="Header">
            <div className="top">
                <Logo />
                <GuideBtn />
            </div>
            <div className="bottom">
                <Gnb />
                <Profile isMember={isMember} onLoginClick={() => setShowLoginPopup(true)}  />
            </div>
            {showLoginPopup && (
                <LoginPopup onClose={() => setShowLoginPopup(false)} setIsMember={setIsMember}  />
            )}
        </div>
    )
}

export default Header;