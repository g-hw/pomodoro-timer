import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, #36D1DC, #5B86E5)',
        color: 'white',
        fontFamily: "'Roboto', sans-serif",
      },
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
  colors: {
    primary: {
      100: '#E6FFFA',
      200: '#234E52',
    },
    accent: {
      red: '#ff6347',
      teal: '#008080',
    },
  },
})

export default theme
