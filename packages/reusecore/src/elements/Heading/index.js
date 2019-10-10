import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../../common/src/theme/app/colors';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color
} from 'styled-system';
import { base, themed } from '../base';

const HeadingWrapper = styled('p')(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  themed('Heading')
);

const Heading = ({ content, ...props }) => (
  <HeadingWrapper {...props}>{content}</HeadingWrapper>
);

export default Heading;

Heading.propTypes = {
  content: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  fontFamily: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  letterSpacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  color,
  ...base.propTypes
};

Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: '900',
  color: colors.textColor
};
