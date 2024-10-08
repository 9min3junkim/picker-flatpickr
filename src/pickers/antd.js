// 3.59
import React from 'react'
import { DatePicker, Space } from 'antd'
import 'antd/dist/reset.css'

const { RangePicker } = DatePicker

const Antd = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }

  const onRangeChange = (dates, dateStrings) => {
    console.log('From: ', dates[0], ', to: ', dates[1])
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
  }

  const disabledDate = (current) => {
    // 오늘 이전 날짜와 2024년 이후 날짜 비활성화
    return current && (current < new Date() || current > new Date(2024, 9, 20))
  }

  const disabledTime = () => {
    return {
      disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20, 21, 22, 23],
      disabledMinutes: () => [],
      disabledSeconds: () => [],
    }
  }

  return (
    <Space direction="vertical" size={12}>
      <h2>Ant Design DatePicker 예제</h2>

      <h3>기본 날짜 선택</h3>
      <DatePicker onChange={onChange} />

      <h3>날짜 범위 선택</h3>
      <RangePicker onChange={onRangeChange} />

      <h3>시간 포함 날짜 선택</h3>
      <DatePicker showTime onChange={onChange} />

      <h3>시간 포함 날짜 범위 선택</h3>
      <RangePicker
        showTime
        onChange={onRangeChange}
        showNow={false}
        disabledDate={disabledDate}
        disabledTime={disabledTime}
      />

      <h3>주 선택</h3>
      <DatePicker onChange={onChange} picker="week" />

      <h3>월 선택</h3>
      <DatePicker onChange={onChange} picker="month" />
    </Space>
  )
}

export default Antd
