import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/nasa-6.png';
import '../styles/header.css';

console.log(logo);

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [])

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='Nasa Logo'/>
      </div>

      <div className='header-buttons'>
        <button className='header-button'>Button 1</button>
        <div className='dropdown-container' ref={dropdownRef}>
          <button className='header-button dropdown-toggle' onClick={handleDropdownToggle}>Dropdown</button>
          {isDropdownOpen && (
            <div className='dropdown-menu'>
              <button className='dropdown-item'>Option 1</button>
              <button className='dropdown-item'>Option 2</button>
              <button className='dropdown-item'>Option 3</button>
            </div>
          )}
        </div>
      </div>

    </header>
  )
}

export default Header;
