import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import BottomComponent from '../component/Bottom';
import useWindowDimensions from '../component/useWindowDimensions';

// import Slider from "react-slick";

// import Vimeo from '@u-wave/react-vimeo';

// 이미지
import logo from '../styles/images/main_logo.svg';
// import logo_blue from '../styles/images/main_logo_blue.svg';

const Main = styled.div`
  box-sizing: border-box;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -99;
`

// const StyledSlider = styled(Slider)`
//   .slick-track {
// 	width: 100% !important;
// 	height: 100vh !important;
//   }

//   .slick-dots {
//     bottom: -50px;
//     margin-top: 200px;
//   }

//   .slick-track {
//     /* overflow-x: hidden; */
//   }
// `

const VideoContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   pointer-events: none;
   overflow: hidden;
`

// const Video = styled(props => <Vimeo {...props} />)`
//   width: 100vw;
//   height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
//   min-height: 100vh;
//   min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  background-color: rgba(0, 0, 0, .6);
  box-shadow: inset 0 0 8rem rgba(0, 0, 0, .5);
  z-index: -1;
`

const MainComponent = () => {
  const { height, width } = useWindowDimensions();
  // const [slideIndex, setSlideIndex] = useState(0);
  // let settings = {
  //   // focusOnSelect: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   beforeChange: (current, next) => setSlideIndex(next),
  // };

  return (
    <>
      <Main>
        {/* <StyledSlider {...settings} >
					<div>

						<VideoContainer>
							<Video
								width={width}
								height={height}
								video="713154690"
								showTitle={false}
								controls={false}
								keyboard={false}
								background
								muted
								responsive
								autoplay
								loop
							/>
						</VideoContainer>
						<Overlay />
					</div>
				</StyledSlider> */}
      </Main>
      <BottomComponent />
    </>
  );
}

export default MainComponent;
