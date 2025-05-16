import "./Header.css";
import Gnb from "./Gnb";
import Logo from "./LogoBtn";
import Profile from "./Profile";
import GuideBtn from "./GuideBtn";
import React, { useState } from 'react';
import { useLogin } from "../LoginContext";
import LoginPopup from "./LoginPopup";

const Header = ({ currentGung, setCurrentGung }) => {
    const { isMember, setIsMember } = useLogin();
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    return (
        <div className="Header">
            <div className="top">
                <Logo />
                <GuideBtn />
            </div>
            <div className="bottom">
                <Gnb currentGung={currentGung} setCurrentGung={setCurrentGung}  />
                <Profile isMember={isMember} onLoginClick={() => setShowLoginPopup(true)} />
            </div>
            {showLoginPopup && (
                <LoginPopup onClose={() => setShowLoginPopup(false)} setIsMember={setIsMember} />
            )}
        </div>
    )
}

export default Header;