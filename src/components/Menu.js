import styled from 'styled-components';

const Menu = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	font-size: 48px;

	@media (max-width: 1300px) {
		font-size: 20px;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		width: 80%;
	}
`;

export default Menu;
