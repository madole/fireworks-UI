import { h } from 'preact';
import styled from 'styled-components';
import { MONTHS } from './MonthPicker';


const Container = styled.div`
    background-color: ${props => props.theme.main};
    color: #FFF;
    padding: 10px;
    cursor: pointer;
`;

const Year = styled.div`
    font-size: 24px;
`;

const DateString = styled.div`
    font-size: 32px;
`;

const Header = ({ year, month, date, onClick }) => {
    const monthString = MONTHS[month];
    return (
        <Container onClick={onClick}>
            <Year>{year}</Year>
            <DateString>{monthString}, {date}</DateString>
        </Container>
    );
};

export default Header;