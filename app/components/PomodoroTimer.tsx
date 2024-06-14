import React from 'react'
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { BREAK_TIME_IN_SECS, WORK_TIME_IN_SECS } from '@/src/constants'

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState<number>(WORK_TIME_IN_SECS) // 25 minutes in seconds
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isBreak, setIsBreak] = useState<boolean>(false)
  const [cycles, setCycles] = useState<number>(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds > 0) return seconds - 1
          clearInterval(interval!)
          if (!isBreak) {
            setIsBreak(true)
            setSeconds(BREAK_TIME_IN_SECS) // 5 minutes break
          } else {
            setIsBreak(false)
            setSeconds(WORK_TIME_IN_SECS) // 25 minutes work
            setCycles(cycles + 1)
          }
          return 0
        })
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval!)
    }

    return () => clearInterval(interval!)
  }, [isActive, seconds, isBreak, cycles])

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setSeconds(WORK_TIME_IN_SECS)
    setIsActive(false)
    setCycles(0)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="20px"
      p={useBreakpointValue({ base: '10', md: '20' })}
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      bgColor={isBreak ? 'primary.200' : ''}
    >
      <VStack spacing={8} alignItems="center">
        <Heading>{isBreak ? 'Break Time' : 'Work Time'}</Heading>
        <CircularProgress
          value={
            (seconds / (isBreak ? BREAK_TIME_IN_SECS : WORK_TIME_IN_SECS)) * 100
          }
          size={useBreakpointValue({ base: '150px', md: '200px', lg: '300px' })}
          thickness="8px"
          color={isBreak ? 'accent.red' : 'accent.teal'}
          trackColor="primary.100"
          display="flex"
        >
          <CircularProgressLabel>{formatTime(seconds)}</CircularProgressLabel>
        </CircularProgress>
        <Stack
          direction="row"
          spacing={4}
          align="center"
          minWidth="150px"
          m={2}
        >
          <Button onClick={toggle} colorScheme="teal" size="lg">
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button onClick={reset} colorScheme="red" size="lg">
            Reset
          </Button>
        </Stack>
        <Text fontSize="2xl" mt={4} textAlign="center">
          Cycles: {cycles}
        </Text>
      </VStack>
    </Box>
  )
}

export default PomodoroTimer
