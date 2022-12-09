import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import useWindowDimensions from './useWindowDimensions';

import logo from '../styles/images/nav_logo.svg';
import logo_blue from '../styles/images/nav_logo_blue.svg';
import plus from '../styles/images/plus.svg';

const Nav = styled.div`
  box-sizing: border-box;
  position: ${props => props.dark ? 'absolute' : 'fixed'};
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - (100vw - 100%));
  height: 58px;
  padding: 10px 20px;
  color: #fff;
  background-color: ${props => props.dark ? 'none' : '#37458C'};
  z-index: 90;
  &>div{
    display: flex;
    width: 100%;
    &>a {
      display: flex;
    }
    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
      >button {
        background-image: url(${plus});
        width: 20px;
        height: 20px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
`

const NavMenu = styled.ul`
  ${props => props.mobile ? css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 57px;
    right: 0;
    margin: 0;
    width: 140px;
    padding: 0;
    list-style: none;
    font-size: 0.875rem;
    &>li {
      box-sizing: border-box;
      width: 100%;
      color: #37458C;
      background-color: rgba(255,255,255,.75);
      border: 1px solid #37458C;
      &:not(:first-child) {
        border-top: none;
      }
      cursor: pointer;
      &>a {
        box-sizing:border-box;
        display: inline-block;
        padding: 10px;
        width: 100%;
        text-decoration: none;
        color: inherit;
        /* opacity: .8;
        &:hover {
          opacity: 1;
        } */

        &:after {
          z-index: 1;
          font-size: 0.875rem;
          position: relative;
          content: "→";
          /* margin-left : -18px; */
          /* bottom : -4px; */
          opacity: 0;
          display: inline-block;
          transition: all .2s ease-in-out;
        };

        &:hover:after {
          opacity: 1;
          transform: translateX(5px);
        }
      }
    }
    
    `
    :
    css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0;
    list-style: none;
    font-size: 0.875rem;
    &>li {
      box-sizing: border-box;
      margin: 0 10px;
      cursor: pointer;
      &>a {
        text-decoration: none;
        color: inherit;
        opacity: ${props => props.dark ? .8 : 1};
        &:hover {
          opacity: 1;
        }
        
        &:after {
          z-index: 1;
          font-size: 0.875rem;
          position: relative;
          content: "→";
          /* margin-left : -18px; */
          /* bottom : -4px; */
          opacity: 0;
          display: inline-block;
          transition: all .2s ease-in-out;
        };

        &:hover:after {
          opacity: 1;
          transform: translateX(5px);
        }
      }
    }
    `
  }
    
`


const NavComponent = ({ dark }) => {
  const { innerWidth } = useWindowDimensions();
  const [isMobile, setMobile] = useState(null);
  const [isMenuOn, setMenuOn] = useState(false);

  useEffect(() => {
    if (!innerWidth) return;
    if (innerWidth <= 720) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [innerWidth])

  useEffect(() => {
    console.log(isMobile)
  }, [isMobile])



  return (
    <Nav dark={dark}>
      <div>
        <Link to='/'>
          <img src={logo} alt='purpledog' />
        </Link>
      </div>

      <div>
        {
          isMobile &&
          <>
            <button onClick={() => setMenuOn(!isMenuOn)}>
            </button>
          </>
        }
        {(!isMobile || (isMobile && isMenuOn)) &&
          <NavMenu mobile={isMobile} dark={dark}>
            <li>
              <Link to='/work' onClick={() => { setMenuOn(false) }}>
                WORK
              </Link>
            </li>
            {/* <li>
                <Link to='/shop'>
                  SHOP
                </Link>
              </li> */}
            <li>
              <Link to='/artist' onClick={() => { setMenuOn(false) }}>
                ARTIST
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => { setMenuOn(false) }}>
                INFO
              </Link>
            </li>
          </NavMenu>}
      </div>
    </Nav>
  );
}

export default NavComponent;