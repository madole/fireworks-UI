import { h, Component } from "preact";
import styled, { keyframes } from "styled-components";
import { connect } from "unistore/preact";
import style from "./style";
import Menu from "../../components/Menu";
import MenuItem from "../../components/MenuItem";
import Card from "../../components/Card";
import CenterFlex from "../../components/CenterFlex";
import fireworksIcon from "../../assets/fireworks_icon.svg";
import actions from "../../state/actions";
import Loading from "../../components/Loading";

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

const Header = Title.extend`
    animation: 2.5s ${fadeIn} ease-out;
    align-self: center;
    margin-top: 20px;
    font-family: "Righteous", cursive;
    font-size: 96px;
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

const LoaderContainer = styled.div`
    position: fixed;
    top: calc(50vh - 80px);
    left: calc(50wh - 80px);
`;

const NoFireworksContainer = Title.extend`
    font-weight: normal;
    font-size: 32px;
    margin-top: 30px;
`;

const NoFireworks = () => (
    <NoFireworksContainer>No fireworks scheduled 👎</NoFireworksContainer>
);

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
                                active={filteredBy === "Today"}
                            >
                                Today
                            </MenuItem>
                            <MenuItem
                                onClick={filterByTomorrow}
                                active={filteredBy === "Tomorrow"}
                            >
                                Tomorrow
                            </MenuItem>
                            <MenuItem
                                onClick={filterByWeek}
                                active={filteredBy === "This Week"}
                            >
                                This week
                            </MenuItem>
                            <MenuItem
                                onClick={filterByMonth}
                                active={filteredBy === "This Month"}
                            >
                                This month
                            </MenuItem>
                        </Menu>
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

export default connect("filteredFireworks, filteredBy, loading", actions)(Home);
