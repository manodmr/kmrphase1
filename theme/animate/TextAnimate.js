import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

TextAnimate.propTypes = {
  text: PropTypes.string.isRequired,
  variants: PropTypes.object,
  sx: PropTypes.object
};

export default function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.h1}
      sx={{
        typography: 'megatitle',
        overflow: 'hidden',
        display: 'inline-flex',
        pr:2,
        ...sx
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inLeft}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
