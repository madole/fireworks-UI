import { h } from 'preact';
import styled from 'styled-components';

const YEARS = Array.from(Array(5)).map((_, i) => 2017 + i);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

const ActiveYear = styled.div`
    font-size: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition-duration: 250ms;
    padding: 20px;
    text-align: center;
    &:hover {
        background-color: #efefef
    }
`;

const YearPicker = ({ year, onSelect }) => (
    <Container>
        {
            YEARS.map(year => <ActiveYear onClick={() => onSelect(year)}>{year}</ActiveYear>)
        }
    </Container>

);

export default YearPicker;