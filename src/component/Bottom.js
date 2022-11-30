import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import facebook from '../styles/images/facebook.svg';
import instagram from '../styles/images/instagram.svg';

const Bottom = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	background-color: ${props => props.dark ? '#292B35' : '#fff'};
	height: 40px;
	font-size: .5rem;
	&>div {
		width: calc(100vw - (100vw - 100%));
		display: flex;
		justify-content: space-between;
		flex-shrink: 0;
		color: ${props => props.dark ? '#C9CEE8' : '#545B7E'};
		font-weight: 600;
		letter-spacing: -0.48px;
		margin: auto 0;
		&>div{
			width: 33%;
		}
	}
`
const CopyrightText = styled.div`
	display: flex;
	justify-content: center;
`
const BottomLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	&>a {
		margin-right: 12px;
		padding: 0 13px;
		text-decoration: none;
		&.bottom_link_sns {
			position: relative;
			display: inline-block;
			&>img {
				position: absolute;
				width: 16px;
				height: 16px;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%)
			}	
		}
	}
`
const BottomComponent = ({ dark }) => {
	return (
		<Bottom dark={dark}>
			<div>
				<div></div>
				<CopyrightText>
					COPYRIGHT ⓒ BlENDED WAVE. ALL RIGHTS RESERVED.
				</CopyrightText>
				<BottomLink>
					<a href="https://www.instagram.com/" target="_blank" className='bottom_link_sns' rel="noreferrer"><img src={instagram} alt="blendedwave instagram" /></a>
				</BottomLink>
			</div>
		</Bottom>
	);
}

export default BottomComponent;