import "./Header.css";
import Gnb from "./Gnb";
import Logo from "./LogoBtn";
import Profile from "./Profile";
import GuideBtn from "./GuideBtn";

const Header = () => {
    return (
        <div className="Header">
            <div className="top">
                <Logo />
                <GuideBtn />
            </div>
            <div className="bottom">
                <Gnb />
                <Profile />
            </div>
        </div>
    )
}

export default Header;