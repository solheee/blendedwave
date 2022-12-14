import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import BottomComponent from '../component/Bottom';

// 이미지
// import logo from '../styles/images/main_logo.svg';
import instagram from '../styles/images/instagram.svg';
import discord from '../styles/images/discord.svg';
import twitter from '../styles/images/twitter.svg';

const Artist = styled.div`
  box-sizing: border-box;
  z-index: -99;
  padding-top: 58px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ArtistCard = styled.div`
	display: flex;
	padding: 50px;
	width: 80%;
	background-color: #fff;
	/* border-bottom: 2px solid #000; */
	cursor: pointer;
	>.artist-main-image {
		min-width: 180px;
		height: 180px;
		margin-right: 50px;
		background-color: #D9D9D9;
	}
	>.artist-info {
		width: 100%;
		>div:first-child {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.artist-name {
				font-size: 20px;
			}
			.artist-job {
				font-size: 14px;
			}
		}
		>div:nth-child(2) {
			color: #DFDFDF;
		}
	}
`

const ArtistComponent = ({ setDarkNav }) => {
	const [artistList, setArtistList] = useState([]);

	useEffect(() => {
		setDarkNav(false);
	}, [setDarkNav])

	useEffect(() => {
		setArtistList([
			{
				name: '',
				job: '',
				sns: [
					{
						sns_name: 'discord',
						sns_url: ''
					}
				],

			},
			{},
			{}
		])

	}, [])


	return (
		<>
			<Artist>
				{artistList && artistList.map((item) => {
					return (
						<ArtistCard>
							<div className='artist-main-image'></div>
							<div className='artist-info'>
								<div>
									<div>
										<p className='artist-name'>DISCUZZ</p>
										<p className='artist-job'>Illustrator & composer</p>
									</div>
									<div>
										<img src={instagram} alt="" />
										<img src={discord} alt="" />
										<img src={twitter} alt="" />
									</div>
								</div>
								<div>
									<p>discuzz@gmail.com</p>
								</div>
							</div>
						</ArtistCard>
					)
				})}
			</Artist>
			<BottomComponent />
		</>
	);
}

export default ArtistComponent;
