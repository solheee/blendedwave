import { useState, useEffect } from 'react';

function getWindowDimensions() {
	const { innerWidth, innerHeight: height } = window;
	return {
		innerWidth,
		width: document.documentElement.clientWidth,
		height
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}