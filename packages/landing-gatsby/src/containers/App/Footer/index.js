import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper from './footer.style';
import LogoImage from 'common/src/assets/image/app/galileo-logo.svg';
import colors from 'common/src/theme/app/colors';

const Footer = ({ colTwo, logoStyle, textStyle, copyrightMenu, copyright }) => {
  return (
    <FooterWrapper>
      <Container>
        <Box {...colTwo} className="copyrightClass">
          <Logo logoSrc={LogoImage} title="App" logoStyle={logoStyle} />
        </Box>
        {/* End of footer List column */}
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer col one style
  colTwo: {
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
    flexBox: true,
    flexWrap: 'wrap',
    width: ['100%'],
  },
  // Footer col two style
  colOne: {
    width: ['100%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%', '25%'],
    pl: ['15px', '0px'],
    pr: ['15px', '0px'],
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: `${colors.textColor}`,
    fontSize: '16px',
    fontWeight: '700',
  },
  // Default logo size
  logoStyle: {
    width: '200px',
    mb: ['15px', 0],
  },
  // widget text default style
  textStyle: {
    color: '#20201d',
    fontSize: '14px',
    mb: '10px',
    mr: '30px',
  },
  copyrightMenu: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: [0, '40px'],
    mt: '3px',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    mb: ['15px', 0],
  },
  copyright: {
    ml: [0, 0, 0, 'auto', 'auto'],
    color: '#20201d',
    fontSize: '14px',
    mb: '10px',
    mt: '3px',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Footer;
