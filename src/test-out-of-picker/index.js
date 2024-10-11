import React from "react";
import {DateTimeSelector} from "./DateTimeSelector";
import {OtherComponent} from "./OtherComponent";

export const OutOfPicker = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);

    return (
        <div>
            <DateTimeSelector onDateChange={setSelectedDate}/>
            <OtherComponent selectedDate={selectedDate}/>
        </div>
    )}