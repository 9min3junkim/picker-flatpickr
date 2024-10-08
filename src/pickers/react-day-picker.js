import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import isAfter from 'date-fns/isAfter'
import 'react-day-picker/dist/style.css'

const ReactDaypicker = () => {
  const [range, setRange] = useState()
  const disabledDays = [
    { before: new Date() },
    (date) => isAfter(date, new Date(2024, 9, 20)),
    new Date(2024, 9, 9),
    { from: new Date(2023, 10, 1), to: new Date(2023, 10, 5) },
  ]

  return (
    <>
      <h2>React Day Picker 예제</h2>

      <div>
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          disabled={disabledDays}
        />
        <DayPicker mode="single" disabled={disabledDays} />
      </div>
    </>
  )
}

export default ReactDaypicker
