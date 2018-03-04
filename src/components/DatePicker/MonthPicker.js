import { h, Component } from 'preact';
import styled from 'styled-components';

const MonthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;
const Arrow = styled.div`
    cursor: pointer;
    transition-duration: 250ms;
    text-align: center;
    border-radius: 50%;
    padding: 7px 10px;
    &:hover {
        background-color: ${props => props.theme.main};
        color: #FFF;
    }
`;

const Month = styled.div`
    padding: 0 10px;
    line-height: 30px
`;

export const MONTHS = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

class MonthPicker extends Component {
    incrementMonth = () => {
        this.props.onChange(this.props.month + 1 >= MONTHS.length ? 0 : this.props.month + 1);
    }

    decrementMonth = () => {
        this.props.onChange(this.props.month - 1 < 0 ? MONTHS.length - 1 : this.props.month - 1);
    }

    render() {
        return (
            <MonthContainer>
                <Arrow onClick={this.decrementMonth}>{'<'}</Arrow>
                <Month>{MONTHS[this.props.month]}</Month>
                <Arrow onClick={this.incrementMonth}>{'>'}</Arrow>
            </MonthContainer>
        );
    }
}

export default MonthPicker;