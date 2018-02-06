import styled from 'styled-components';

const Menu = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	font-size: 48px;
	@media (max-width: 1300px) {
		flex-direction: column;
		align-items: center;
		width: 40%;
	}

	@media (max-width: 600px) {
		font-size: 28px;
	}
`;

export default Menu;
