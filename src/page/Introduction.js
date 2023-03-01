import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BottomComponent from '../component/Bottom';

// 이미지
// import logo from '../styles/images/main_logo.svg';

const settings = {
	className: "center",
	centerMode: true,
	centerPadding: "20%",
	slidesToShow: 1,
	speed: 500,
	focusOnSelect: true,
	infinite: true,
	arrows: false,
};

const Introduction = styled.div`
	box-sizing: border-box;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	>div {
		width: calc(100vw - (100vw - 100%));
	}
`

const ProjectCard = styled.div`
	border: solid 1px #fff;
	display: flex !important;
    justify-content: center;
    align-items: center;
`

const IntroductionComponent = () => {
	const [projectList, setProjectList] = useState([]);

	useEffect(() => {
		setProjectList([
			{
				url: 'https://vimeo.com/761341466'
			},
			{
				url: 'https://vimeo.com/761341466'
			},
			{
				url: 'https://vimeo.com/761341466'
			},
		])

	}, [])

	return (
		<>
			<Introduction>
				<h1>ARTIST INTRODUCTION</h1>
				<div className='work-carousel'>
					<Slider {...settings}>
						{
							projectList.map((item, key) => {
								return (
									<ProjectCard key={`projet-card-${key}`}>
										<ReactPlayer url={item.url} />
										{key}
									</ProjectCard>
								)
							})
						}
					</Slider>
				</div>
				<div className="artist-info">
					<p>DISCUZZ</p>
					<p>ILLUSTRATOR & COMPOSER</p>
				</div>
			</Introduction>
			<BottomComponent />
		</>
	);
}

export default IntroductionComponent;
