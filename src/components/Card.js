import { h } from "preact";
import { format } from "date-fns";
import styled from "styled-components";
import CenterFlex from "./CenterFlex";
import TypeTabs from "./TypeTabs";
import Directions from "./Directions";

const Container = CenterFlex.extend`
    height: 350px;
    width: 350px;
    padding: 10px;
    background-color: #565863;
    border-radius: 5px;
    justify-content: space-between;
    color: #f2f2f2;
    font-family: "Roboto", sans-serif;
    margin: 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    transition-duration: 0.25s;
    &:hover {
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
        background-color: rgba(86, 88, 98, 0.9);
    }
    @media (max-width: 600px) {
        height: auto;
        min-height: 350px;
    }
`;

const Title = styled.h3`
    text-align: center;
    font-weight: 500;
`;
const SubTitle = styled.div`
    text-align: center;
    font-weight: 400;
`;

const Time = styled.div`
    text-align: center;
    font-weight: 300;
`;

const Card = ({ item }) => (
    <Container>
        <div>
            <Title>{item.where}</Title>
            <SubTitle>{format(item.date, "dddd DD MMMM YYYY")}</SubTitle>
        </div>
        <Time>
            From: {item.from} | To: {item.to}
        </Time>
        <Directions where={item.where} />
        <TypeTabs type={item.type} />
    </Container>
);

export default Card;
