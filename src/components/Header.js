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
    const [menuOpen, setMenuOpen] = useState(false); // 햄버거 toggle 상태
    const onMenuClose = () => setMenuOpen(false);
    return (
        <>
            <div className="Hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'}
            </div>

            <div className={`Header ${menuOpen ? 'active' : ''}`}>
                <div className="top">
                    <Logo />
                    <GuideBtn onClick={onMenuClose} />
                </div>
                <div className="bottom">
                    <Gnb currentGung={currentGung} setCurrentGung={setCurrentGung}
                        onItemClick={() => setMenuOpen(false)} />
                    <Profile isMember={isMember} onLoginClick={() => {
                        setShowLoginPopup(true);
                        onMenuClose(); 
                    }} />
                </div>
                {showLoginPopup && (
                    <LoginPopup onClose={() => setShowLoginPopup(false)} setIsMember={setIsMember} />
                )}
            </div>
        </>
    );
};


export default Header;