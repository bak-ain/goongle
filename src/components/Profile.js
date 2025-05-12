import { useNavigate } from 'react-router-dom';
import { Characters } from '../img/img';
import './Profile.css';

const Profile = ({ isMember, nickname }) => {
    const navigate = useNavigate();

    const goProfile = () => {
        navigate(isMember ? '/mypage' : '/login');
    };

    return (
        <div className="Profile" onClick={goProfile}>
            <div className='cha_box'>
                <img src={Characters.goong1} alt="프로필" />
            </div>
            <div className="nickname_box">
                <span>{isMember ? nickname : 'Guest'}</span>
            </div>
        </div>
    );
};

export default Profile;
