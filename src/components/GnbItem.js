// GnbItem.jsx
import React, { useEffect, useRef } from 'react';
import './GnbItem.css';

const GnbItem = ({
  icon,
  label,
  onClick,
  isActive,
  className,
  children,
  enableToggle,
  isSubOpen,
  setIsSubOpen,
}) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        setIsSubOpen?.(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsSubOpen]);

  const handleClick = (e) => {
    if (enableToggle) {
      e.stopPropagation();
      setIsSubOpen?.((prev) => !prev);
    }
    if (onClick) onClick();
  };

  return (
    <li
      ref={itemRef}
      className={`GnbItem ${isActive ? 'on' : ''} ${className || ''} ${isSubOpen ? 'sub_open' : ''}`}
    >
      <button className="gnb_link" onClick={handleClick}>
        <img src={icon} alt={`${label} 아이콘`} className="gnb_icon" />
        <span className="gnb_label">{label}</span>
      </button>

      {children && (
        <div className={`submenu ${isSubOpen ? 'show' : ''}`}>
          {children}
        </div>
      )}
    </li>
  );
};

export default GnbItem;
