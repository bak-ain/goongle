import { useNavigate } from 'react-router-dom';
import { Icons } from '../img/img';

const Logo = ({ isMember }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(isMember ? '/member' : '/non-member');
  };

  return (
    <div className="Logo" onClick={goHome}>
      <img src={Icons.logo} alt="로고" />
    </div>
  );
};

export default Logo;
