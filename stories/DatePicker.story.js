import { h } from "preact";
import { storiesOf } from "@storybook/react";
import DatePicker from "../src/components/DatePicker";

storiesOf("Date Picker", module)
    .add("with todays start date", () => (
        <DatePicker
            startDate={{
                date: new Date(),
                meta: "The thing"
            }}
            events={[
                {
                    date: new Date(),
                    meta: "The 1"
                },
                {
                    date: new Date("12/01/2018"),
                    meta: "The 2"
                }
            ]}
        />
    ))
    .add("with green theme", () => (
        <DatePicker
            startDate={{
                date: new Date(),
                meta: "The thing"
            }}
            events={[
                {
                    date: new Date(),
                    meta: "The 1"
                },
                {
                    date: new Date("12/01/2018"),
                    meta: "The 2"
                }
            ]}
            theme={{
                main: "green"
            }}
        />
    ))
    .add("with callback", () => (
        <DatePicker
            startDate={{
                date: new Date(),
                meta: "The thing"
            }}
            events={[
                {
                    date: new Date(),
                    meta: "The 1"
                },
                {
                    date: new Date("12/01/2018"),
                    meta: "The 2"
                }
            ]}
            selected={date => alert(date)}
        />
    ));
