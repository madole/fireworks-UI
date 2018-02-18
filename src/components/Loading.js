import styled, { keyframes } from 'styled-components';
import fireworksIcon from '../assets/fireworks_icon.svg';

const skCubeMove = keyframes`
    25% { 
        transform: translateX(80px) rotate(-90deg) scale(0.5);
    } 
    50% { 
        transform: translateX(80px) translateY(80px) rotate(-179deg);
    } 
    50.1% { 
        transform: translateX(80px) translateY(80px) rotate(-180deg);
    } 
    75% { 
        transform: translateX(0px) translateY(80px) rotate(-270deg) scale(0.5);
    } 
    100% { 
        transform: rotate(-360deg);
    }
`;

const Spinner = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 175px;
	height: 175px;
`;

const Cube1 = styled.div`
    background-image: url("${fireworksIcon}");
    background-repeat: no-repeat;
    height: 80px;
    width: 80px;
    svg: {
        fill: white;
    }
	position: absolute;
	top: 0;
	left: 0;
	animation: ${skCubeMove} 2s infinite ease-in-out;
`;
const Cube2 = Cube1.extend`
	animation-delay: -1s;
`;

const Loading = () => (
	<Spinner>
		<Cube1 />
		<Cube2 />
	</Spinner>
);

export default Loading;
