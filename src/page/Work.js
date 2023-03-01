import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import BottomComponent from '../component/Bottom';

// 이미지

const Work = styled.div`
  	box-sizing: border-box;
  	z-index: -99;
	padding-top: 58px;	
	&>div {
		&>div:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60px;
		}
	}
`

const WorkCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 10px;
	grid-auto-rows: 10px;

	padding: 0 30px;
	@media screen and (max-width: 720px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 0;
	}

	@media screen and (max-width: 400px) {
			display: block;
			padding: 0;

	}

`

const WorkCard = styled.div`
	>.pseudo-img {
		background-color: #D9D9D9;
	}

	@media screen and (max-width: 400px) {
		margin-bottom: 10px;
	}
`

const WorkComponent = () => {
	const [workList, setWorkList] = useState([]);

	useEffect(() => {
		setWorkList([
			100,
			200,
			500,
			600,
			200,
			100,
			150,
			300,
			100,
			80,
			100,
			100,
		])

	}, [])

	useEffect(() => {
		function masonryLayout() {
			const masonryContainerStyle = getComputedStyle(
				document.querySelector(".masonry-container")
			);
			const columnGap = parseInt(
				masonryContainerStyle.getPropertyValue("column-gap")
			);
			const autoRows = parseInt(
				masonryContainerStyle.getPropertyValue("grid-auto-rows")
			);

			document.querySelectorAll(".masonry-item").forEach((elt) => {
				console.log(elt.querySelector(".pseudo-img"))
				if (elt.querySelector(".pseudo-img")) {
					elt.style.gridRowEnd = `span ${Math.ceil(
						elt.querySelector(".pseudo-img").scrollHeight / autoRows +
						columnGap / autoRows
					)
						} `;
				}
			});
		}

		masonryLayout();
		window.addEventListener("resize", masonryLayout);
		return () => {
			window.removeEventListener("resize", masonryLayout);
		}
	})

	return (
		<>
			<Work>
				<div>
					<div>
						WORK-PROJECT
					</div>
					<WorkCardContainer className='masonry-container'>
						{workList && workList.map((item, i) => {
							return (
								<WorkCard className='masonry-item' key={`mansonry-item-${i}`}>
									<div className='pseudo-img' style={{ height: item }}></div>
								</WorkCard>
							)
						})}
					</WorkCardContainer>
				</div>
			</Work>
			<BottomComponent />
		</>
	);
}

export default WorkComponent;
