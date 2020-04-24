import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import { LIGHT_BLUE } from '../constants/colors'

Wordpress2016.overrideStyles = () => ({
  '*': {
    boxSizing: 'border-box',
  },
  'h1, h2, h3': {
    fontFamily: 'Montserrat, sans-serif',
  },
  a: {
    textDecoration: 'none',
    color: LIGHT_BLUE,
    fontFamily: 'inherit',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
})

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
