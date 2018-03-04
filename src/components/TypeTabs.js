import { h } from "preact";
import styled from "styled-components";
import CenterFlex from "./CenterFlex";

const Container = CenterFlex.extend`
    flex-wrap: wrap;
    flex-direction: row;
`;
const Tab = styled.div`
    padding: 5px;
    margin: 10px;
    width: 140px;
    text-align: center;
    border-radius: 5px;
    background-color: #6f7180;
    font-size: 16px;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
`;

const TypeTabs = ({ type }) => {
    if (!type) return;
    const types = type.split(",");

    return <Container>{types.map(t => <Tab>{t}</Tab>)}</Container>;
};

export default TypeTabs;
