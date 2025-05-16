import React, { useState } from 'react';
import { useLogin } from '../LoginContext';
import './LoginPopup.css';

const LoginPopup = ({ onClose }) => {
    const { setIsMember } = useLogin();
    const [id, setId] = useState('gungle123');
    const [pw, setPw] = useState('1234');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // ✅ 추가

    const handleLogin = () => {
        if (id === 'gungle123' && pw === '1234') {
            if (rememberMe) {
                localStorage.setItem('userToken', 'valid');
            } else {
                sessionStorage.setItem('userToken', 'valid');
            }

            setIsMember(true);
            onClose();
        } else {
            setError('아이디 또는 비밀번호가 틀렸습니다.');
        }
    };

    return (
        <div className="login-popup-overlay">
            <div className="login-popup-content">
                <button className="close-btn" onClick={onClose}>✖</button>
                <div className="login-wrap">
                    <h2>로그인</h2>
                    <input
                        type="text"
                        placeholder="ex) gungle123"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    />
                    <input
                        type="password"
                        placeholder="****"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                    />
                    {error && <p className="error-msg">{error}</p>}

                    {/* ✅ 로그인 상태 유지 체크박스 */}
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            id="rememberMe"
                        />
                        <label htmlFor="rememberMe">로그인 상태 유지</label>
                    </div>

                    <button className="login-btn" onClick={handleLogin}>로그인</button>

                    <div className="social-login">
                        <button>G Google로 로그인하기</button>
                        <button> Apple로 로그인하기</button>
                    </div>
                    <p className="signup-link">회원가입하기</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
