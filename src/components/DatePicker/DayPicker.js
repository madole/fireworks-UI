import { h } from 'preact';
import styled from 'styled-components'
import color from 'color';

const DateGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
`;

const GridItem = styled.div`
    text-align: center;
    border-radius: 50%;
    line-height: 40px;
`

const Day = GridItem.extend`
    transition-duration: 250ms;
    background-color: ${props => props.selected && props.theme.main};
    color: ${props => props.selected ? '#FFF' : '#000'};
    cursor: pointer;
    &:hover {
        background-color: ${props => color(props.theme.main).lighten(0.7).string()};
    }
`;

const DayPicker = ({ date, monthDays, firstDay, onChange }) => (
    <DateGrid>
        {
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <GridItem>{day}</GridItem>
            ))
        }
        {
            Array.from(Array(firstDay + 1)).map((_, i) => (
                <GridItem />
            ))
        }
        {
            Array.from(Array(monthDays)).map((_, i) => (
                <Day
                    selected={(i + 1) === date}
                    onClick={() => onChange(i + 1)}
                >
                    {i + 1}
                </Day>
            ))
        }
    </DateGrid>
)

export default DayPicker;