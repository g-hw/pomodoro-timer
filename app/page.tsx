'use client'

import React from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import PomodoroTimer from './components/PomodoroTimer'

export default function Home() {
  return (
    <Container centerContent minHeight={'100vh'}>
      <VStack spacing={8} mt={20} w={'100%'}>
        <Heading as="h1" size="2xl">
          Pomodoro Timer
        </Heading>
        <PomodoroTimer />
      </VStack>
    </Container>
  )
}
