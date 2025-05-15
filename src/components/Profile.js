import { useNavigate } from 'react-router-dom';
import { Characters } from '../img/img';
import './Profile.css';

const Profile = ({ isMember, onLoginClick }) => {
    return (
        <div className="Profile" onClick={onLoginClick}>
            <div className='cha_box'>
                <img src={Characters.goong1} alt="프로필" />
            </div>
            <div className='nickname_box'>
                <span>{isMember ? '닉네임' : 'Guest'}</span>
            </div>
        </div>
    );
};


export default Profile;
