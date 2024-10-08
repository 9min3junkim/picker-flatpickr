import React, { useState } from 'react'
import { DatePicker, DateRangePicker } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

const Rsuite = () => {
  const [singleDate, setSingleDate] = useState(null)
  const [dateRange, setDateRange] = useState(null)

  const handleSingleDateChange = (date) => {
    setSingleDate(date)
  }

  const handleDateRangeChange = (dateRange) => {
    setDateRange(dateRange)
  }

  const shouldDisableDate = (date) => {
    const today = new Date()
    const maxDate = new Date(2024, 9, 20)
    // 오늘 이전 날짜와 2024년 이후 날짜 비활성화
    return date < today || date > maxDate
  }

  return (
    <div>
      <h2>rsuite DatePicker 예제</h2>

      <h3>단일 날짜 선택</h3>
      <DatePicker
        value={singleDate}
        onChange={handleSingleDateChange}
        format="yyyy-MM-dd"
        style={{ width: 200 }}
        shouldDisableDate={shouldDisableDate}
      />
      {singleDate && <p>선택된 날짜: {singleDate.toDateString()}</p>}

      <h3>날짜 범위 선택</h3>
      <DateRangePicker
        value={dateRange}
        onChange={handleDateRangeChange}
        format="yyyy-MM-dd hh:mm"
        ranges={[
          {
            label: 'Now',
            value: [new Date(), new Date()],
          },
        ]}
        style={{ width: 300 }}
        shouldDisableDate={shouldDisableDate}
      />
      {dateRange && (
        <p>
          선택된 범위: {dateRange[0].toDateString()} -{' '}
          {dateRange[1].toDateString()}
        </p>
      )}
    </div>
  )
}

export default Rsuite
