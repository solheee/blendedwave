import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import discord from '../styles/images/discord.svg';

const Bottom = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.dark ? '#292B35' : '#fff'};
	height: 40px;
	width: calc(100vw - (100vw - 100%));
	color: ${props => props.dark ? '#C9CEE8' : '#545B7E'};
	flex-shrink: 0;
	font-size: .5rem;
	font-weight: 600;
	letter-spacing: -0.48px;
	margin: auto 0;
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
		margin-left: 12px;
		padding: 0 13px;
		text-decoration: none;
		&.bottom_link_sns {
			position: relative;
			display: inline-block;
			&>img {
				position: absolute;
				width: 15px;
				height: 15px;
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
			<CopyrightText>
				COPYRIGHT ⓒ BlENDED WAVE. ALL RIGHTS RESERVED.
				{/* <BottomLink> */}
				{/* <a href="https://www.instagram.com/" target="_blank" className='bottom_link_sns' rel="noreferrer"><img src={discord} alt="blendedwave instagram" /></a> */}
				{/* </BottomLink> */}
			</CopyrightText>
		</Bottom>
	);
}

export default BottomComponent;