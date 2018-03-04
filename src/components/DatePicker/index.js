import { h, Component } from "preact";
import { getDay, getMonth, getYear, getDaysInMonth, getDate } from "date-fns";
import styled, { ThemeProvider } from "styled-components";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import Header from "./Header";
import DayPicker from "./DayPicker";

const getDayMonthYear = date => ({
    date: getDate(date),
    month: getMonth(date),
    year: getYear(date)
});

const Container = styled.div`
    width: ${props => (props.width ? props.width : 300)}px;
    min-height: ${props => (props.height ? props.height : 300)}px;
    border: 1px solid #ccc;
    font-family: Helvetica;
`;

const defaultTheme = {
    main: "#9C27B0"
};

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.setState({
            selectedDate: {
                meta: props.startDate.meta,
                ...getDayMonthYear(props.startDate.date)
            },
            events: props.events
                ? props.events.map(event => ({
                      ...event.meta,
                      ...getDayMonthYear(event.date)
                  }))
                : [],
            yearPickerActive: false
        });
    }

    getMonthDays = month =>
        getDaysInMonth(
            new Date(
                this.state.selectedDate.year,
                month || this.state.selectedDate.month
            )
        );

    onMonthSelect = month => {
        const monthDays = this.getMonthDays(month);
        const date =
            this.state.selectedDate.date > monthDays
                ? monthDays
                : this.state.selectedDate.date;
        const selectedDate = { ...this.state.selectedDate, month, date };
        this.setState({ selectedDate });
    };

    onDaySelect = date => {
        const selectedDate = { ...this.state.selectedDate, date };
        this.setState({ selectedDate });

        this.props.selected(
            new Date(selectedDate.year, selectedDate.month, selectedDate.date)
        );
    };

    onYearSelect = year => {
        const selectedDate = { ...this.state.selectedDate, year };
        this.setState({ selectedDate, yearPickerActive: false });
    };

    activateYearToggle = () => {
        this.setState({ yearPickerActive: !this.state.yearPickerActive });
    };

    render({ theme }, { selectedDate, events, yearPickerActive }) {
        const monthDays = this.getMonthDays();
        const firstDay = getDay(
            new Date(selectedDate.year, selectedDate.month, 0)
        );
        return (
            <ThemeProvider theme={theme || defaultTheme}>
                <Container>
                    <Header
                        year={selectedDate.year}
                        month={selectedDate.month}
                        date={selectedDate.date}
                        onClick={this.activateYearToggle}
                    />
                    {yearPickerActive ? (
                        <YearPicker
                            year={selectedDate.year}
                            onSelect={this.onYearSelect}
                        />
                    ) : (
                        <div>
                            <MonthPicker
                                month={selectedDate.month}
                                onChange={this.onMonthSelect}
                            />
                            <DayPicker
                                date={selectedDate.date}
                                onChange={this.onDaySelect}
                                monthDays={monthDays}
                                firstDay={firstDay}
                            />
                        </div>
                    )}
                </Container>
            </ThemeProvider>
        );
    }
}

export default DatePicker;
