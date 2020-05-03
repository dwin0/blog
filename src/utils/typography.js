import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import { LIGHT_BLUE, BLACK } from '../constants/colors'

Wordpress2016.overrideStyles = () => ({
  '*': {
    boxSizing: 'border-box',
  },
  'h1, h2, h3': {
    fontFamily: 'Montserrat, sans-serif',
  },
  h2: {
    marginTop: '4rem',
    marginBottom: '1.25rem',
  },
  a: {
    textDecoration: 'none',
    color: LIGHT_BLUE,
    fontFamily: 'inherit',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
  blockquote: {
    margin: '0 0 1.75rem 0',
    padding: '0 1.75rem',
    borderLeft: `2px solid ${BLACK}`,
  },
  '.grvsc-code': {
    // highlighted code
    fontSize: '1rem',
  },
  'code:not(.grvsc-code)': {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  '.gatsby-resp-image-image': {
    boxShadow: '0px 0px 5px 0px #0000006b',
  },
})

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
