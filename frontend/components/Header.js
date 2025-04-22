import React, { useState, useRef, useEffect } from 'react'
import logo from '../assets/nasa-6.png';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${pr => pr.theme.black};
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 10px 20px;
`

const Logo = styled.div`
  width: 100px;
  margin: 5px 40px;
`

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

const HeaderButton = styled.button`
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  height: 100%;
  background-color: ${pr => pr.theme.tertiaryColor};
  color: ${pr => pr.theme.white};

  &:hover {
    background-color: ${pr => pr.theme.white};
    color: ${pr => pr.theme.tertiaryColor};
  }
`

const ToggleButton = styled.button`
  background-color: ${pr => pr.theme.white};
  padding: 8px 15px;
  border: none;
  cursor: pointer;
  height: 100%;

  &:hover {
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};
  }
`
const DropdownContainer = styled.div`
  position: relative;
  height: 100%;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
  z-index: 10;
`

const DropdownItem = styled.button`
  background-color: ${pr => pr.theme.white};
  margin: 5px;

  &:hover {
    background-color: ${pr => pr.theme.secondaryColor};
    color: ${pr => pr.theme.white};
  }
`

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
    <StyledHeader>
      <Logo>
        <img src={logo} alt='Nasa Logo'/>
      </Logo>

      <HeaderButtons>
        <HeaderButton>Button 1</HeaderButton>
        <DropdownContainer ref={dropdownRef}>
          <ToggleButton onClick={handleDropdownToggle}>Dropdown</ToggleButton>
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Option 3</DropdownItem>
            </DropdownMenu>
          )}
        </DropdownContainer>
      </HeaderButtons>
    </StyledHeader>
  )
}

export default Header;
