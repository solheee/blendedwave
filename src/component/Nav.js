import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../styles/images/nav_logo.svg';
import logo_blue from '../styles/images/nav_logo_blue.svg';
import useWindowDimensions from './useWindowDimensions';

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
  }
`

const NavMenu = styled.ul`
  ${props => props.mobile ? css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 57px;
    right: 0;
    margin: 0;
    width: 40%;
    min-width: 140px;
    padding: 0;
    list-style: none;
    font-size: 0.875rem;
    &>li {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      color: #37458C;
      background-color: rgba(255,255,255,.6);
      border: 1px solid #37458C;
      &:not(:first-child) {
        border-top: none;
      }
      cursor: pointer;
      &>a {
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
        opacity: .8;
        
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
  const [isMobile, setMobile] = useState(false);

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

          </>
        }
        <NavMenu mobile={isMobile}>
          <li>
            <Link to='/work'>
              WORK
            </Link>
          </li>
          {/* <li>
                <Link to='/shop'>
                  SHOP
                </Link>
              </li> */}
          <li>
            <Link to='/artist'>
              ARTIST
            </Link>
          </li>
          <li>
            <Link to='/about'>
              INFO
            </Link>
          </li>
        </NavMenu>
      </div>
    </Nav>
  );
}

export default NavComponent;