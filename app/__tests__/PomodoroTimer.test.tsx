import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import PomodoroTimer from '../components/PomodoroTimer'
import '@testing-library/jest-dom/extend-expect'

describe('PomodoroTimer component', () => {
  test('renders timer display', () => {
    render(<PomodoroTimer />)
    const timerDisplay = screen.getByText(/25:00/) // Initial timer display
    expect(timerDisplay).toBeInTheDocument()
  })

  test('starts and pauses timer', () => {
    render(<PomodoroTimer />)
    const startButton = screen.getByText('Start')
    fireEvent.click(startButton)
    const pauseButton = screen.getByText('Pause')
    expect(pauseButton).toBeInTheDocument()
  })

  test('resets timer', () => {
    render(<PomodoroTimer />)
    const startButton = screen.getByText('Start')
    fireEvent.click(startButton)
    const resetButton = screen.getByText('Reset')
    fireEvent.click(resetButton)
    const timerDisplay = screen.getByText(/25:00/) // After reset, timer should show 25:00
    expect(timerDisplay).toBeInTheDocument()
  })
})
