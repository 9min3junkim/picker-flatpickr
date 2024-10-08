import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReactPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <h2>React Datepicker 예제</h2>

      <h3>단일 날짜 및 시간 선택</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="yyyy/MM/dd HH:mm"
        minDate={new Date()}
        maxDate={new Date('2024-12-31')}
        excludeDates={[new Date('2024-10-10'), new Date('2024-10-15')]}
        placeholderText="날짜를 선택하세요"
      />
      <p>선택된 날짜: {selectedDate.toLocaleString()}</p>

      <h3>날짜 범위 선택</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy/MM/dd"
        placeholderText="시작 날짜"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy/MM/dd"
        placeholderText="종료 날짜"
      />
      <p>
        선택된 범위: {startDate.toDateString()} -{' '}
        {endDate ? endDate.toDateString() : '미선택'}
      </p>
    </div>
  )
}

export default ReactPicker
