import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import BottomComponent from '../component/Bottom';

// 이미지
// import logo from '../styles/images/main_logo.svg';
// import instagram from '../styles/images/instagram.svg';
// import discord from '../styles/images/discord.svg';
// import twitter from '../styles/images/twitter.svg';
import plusIcon from '../styles/images/plus.svg';

const Artist = styled.div`
	box-sizing: border-box;
	padding-top: 58px;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
`

const ArtistGrid = styled.div`
	position: relative;
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	>h1 {
		position: absolute;
		top: -64px;
	}
	
	@media screen and (max-width: 970px) {
		margin-top: 80px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 600px) {
		margin-top: 80px;
		display: block;
	}
`

const ArtistCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border-bottom: 2px solid #000; */
	width: 280px;
	cursor: pointer;
	>.artist-main-image {
		position: relative;
		width: 280px;
		height: 280px;
		background-color: #D9D9D9;
		>.artist-image-overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.2);
		}
		>.artist-card-hover {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			width: 40%;
			height: 40%;
			background-color: rgba(0,0,0,.25);
			transform: translate(-50%, -50%);
			flex-direction: column;
			justify-content: center;
			align-items: center;
			>p {
				margin-top: 8px;
			}
		}
	}
	>.artist-info {
		font-size: 1.13rem;
	}
	:hover, &.hover {
		>.artist-main-image {
			>.artist-image-overlay {
				background-color: rgba(0,0,0,0);
			}
			>.artist-card-hover {
				display: flex;
			}
		}
	}
`

const ArtistComponent = () => {
	const [artistList, setArtistList] = useState([]);
	const [hoverIdx, setHoverIdx] = useState(0);

	useEffect(() => {
		setArtistList([
			{
				name: 'DISCUZZ',
				job: [
					'illustrator',
					'composer'
				],
				// sns: [
				// 	{
				// 		sns_name: 'discord',
				// 		sns_url: ''
				// 	}
				// ],
			},
			{},
			{},
			{},
			{},
			{},
		])

	}, [])

	useEffect(() => {

	})

	return (
		<>
			<Artist>
				<ArtistGrid>
					<h1>ARTISTS</h1>
					{artistList && artistList.map((item, key) => {
						return (
							<Link to={item.name} key={`artist-card-${key}`}>
								<ArtistCard className={`${hoverIdx === key ? 'hover' : ''}`} onMouseEnter={() => { setHoverIdx(key) }}>
									<div className='artist-main-image'>
										<div className='artist-image-overlay'>
											<div className='artist-job'>
												{/* <img src={ } alt="" /> */}
												{/* <img src={ } alt="" /> */}
											</div>
										</div>
										<div className='artist-card-hover'>
											<img src={plusIcon} alt="" width={35} />
											<p>VIEW DETAIL</p>
										</div>
									</div>
									<div className="artist-info">
										<p className='artist-name'>DISCUZZ</p>
									</div>
								</ArtistCard>
							</Link>
						)
					})}
				</ArtistGrid>
			</Artist>
			<BottomComponent />
		</>
	);
}

export default ArtistComponent;
