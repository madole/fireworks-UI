import { h, Component } from 'preact';
import styled, { keyframes } from 'styled-components';
import { connect } from 'unistore/preact';
import style from './style';
import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import Card from '../../components/Card';
import CenterFlex from '../../components/CenterFlex';
import fireworksIcon from '../../assets/fireworks_icon.svg';
import actions from '../../state/actions';
import Loading from '../../components/Loading';

const NoFireworks = () => <div>No fireworks today</div>;

const Title = styled.div`
	font-size: 54px;
	color: white;
	text-align: center;
	font-weight: bold;
	line-height: 65px;
	@media (max-width: 600px) {
		font-size: 32px;
	}
	display: flex;
`;

const TitleNotBold = styled(Title)`
	font-weight: normal;
	font-size: 32px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInDiv = CenterFlex.extend`
	animation: 2.5s ${fadeIn} ease-out;
`;

const Header = styled(Title)`
	animation: 2.5s ${fadeIn} ease-out;
	align-self: center;
	margin-top: 20px;
`;

const Icon = styled.div`
	background-image: url("${fireworksIcon}");
	background-repeat: no-repeat;
	height: 80px;
	width: 80px;
	svg: {
		fill: white;
	}
`;

const LoaderContainer = CenterFlex.extend`
	height: 100%;
`;

class Home extends Component {
	render({
		filteredFireworks,
		filterByToday,
		filterByTomorrow,
		filterByWeek,
		filterByMonth,
		filteredBy,
		loading
	}) {
		return (
			<CenterFlex>
				<Header>
					Sydney Fireworks <Icon />
				</Header>
				{loading ? (
					<LoaderContainer>
						<Loading />
					</LoaderContainer>
				) : (
					<FadeInDiv>
						<Menu>
							<MenuItem
								onClick={filterByToday}
								active={filteredBy === 'Today'}
							>
								Today
							</MenuItem>
							<MenuItem
								onClick={filterByTomorrow}
								active={filteredBy === 'Tomorrow'}
							>
								Tomorrow
							</MenuItem>
							<MenuItem
								onClick={filterByWeek}
								active={filteredBy === 'This Week'}
							>
								This week
							</MenuItem>
							<MenuItem
								onClick={filterByMonth}
								active={filteredBy === 'This Month'}
							>
								This month
							</MenuItem>
						</Menu>
						<TitleNotBold>
							{filteredBy}'s fireworks displays ({
								filteredFireworks.length
							})
						</TitleNotBold>
						<div class={style.cardContainer}>
							{filteredFireworks.length ? (
								filteredFireworks.map(item => (
									<Card item={item} />
								))
							) : (
								<NoFireworks />
							)}
						</div>
					</FadeInDiv>
				)}
			</CenterFlex>
		);
	}
}

export default connect('filteredFireworks, filteredBy, loading', actions)(Home);
