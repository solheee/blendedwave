import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import NavComponent from '../component/Nav';
import BottomComponent from '../component/Bottom';

// 이미지
import sopeomore from '../styles/images/sopeomore.jpg';
import logo from '../styles/images/main_logo.svg';
// import logo_blue from '../styles/images/main_logo_blue.svg';

const Work = styled.div`
  box-sizing: border-box;
  z-index: -99;
  &>div {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
  }
`

const WorkComponent = () => {

	return (
		<>
			<NavComponent />
			<Work>
				<div>
					WORK-PROJECTS
				</div>
			</Work>
			<BottomComponent />
		</>
	);
}

export default WorkComponent;
