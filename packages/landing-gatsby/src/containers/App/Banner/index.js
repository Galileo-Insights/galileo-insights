import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ParticlesComponent from '../particles';
import Container from 'common/src/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import { BannerSquareShape, BannerCircleShape } from '../app.style';
import colors from 'common/src/theme/app/colors';
import Hero from 'common/src/assets/image/app/hero.jpg';

import {
  DiscountWrapper,
  DiscountLabel,
  ButtonWrapper,
  EmailInputWrapper,
} from './banner.style';
import { flex } from 'styled-system';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyleTwo,
  discountAmount,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
  discountText,
  textArea,
  textAreaRow,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appScreenshot: file(relativePath: { eq: "image/app/mobile.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
		<Box {...SectionWrapper}>
			<div
				style={{
					textShadow: '2px 2px 2px black',
					background: `url(${Hero}) fixed`,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: 'calc(100vh - 25px)',
					backgroundPosition: 'center',
					overflow: 'scroll',
				}}
			>
				<Box {...learningContentArea}>
					<Text
						style={{ textShadow: '2px 2px 2px black' }}
						content="Our team grew up building bulletproof software that runs Fortune 20 companies. We left corporate America because we wanted to go faster, be nimble, and experiment. We like innovating on game-changing products with game-changing people."
						{...learningSubTitle}
					/>
					<Text
						style={{ textShadow: '2px 2px 2px black' }}
						{...learningDescription}
						content="Let us accelerate the evolution of your company and your technology products. We take you from two-guys-in-a-garage, cobbling together MVPs, to a reliable Product Team, building robust and exciting products that clients demand and that big investors love."
					/>
				</Box>
			</div>
			<ParticlesComponent />
		</Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  textArea: PropTypes.object,
  textAreaRow: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '35%', '40%'],
    ml: 'auto',
  },
  title: {
    content: 'Essential Mobile  App Landing for  Workspaces',
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    color: `${colors.textColor}`,
    mb: '20px',
  },
  description: {
    content:
      'A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.',
    fontSize: '16px',
    color: `${colors.textColor}`,
    lineHeight: '33px',
    mb: '10px',
  },
  button: {
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: `${colors.white}`,
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyleTwo: {
    minWidth: '156px',
    ml: '15px',
    bg: `${colors.white}`,
    color: `${colors.primary}`,
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'update',
    fontSize: '14px',
    fontWeight: '600',
    color: `${colors.white}`,
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: `${colors.primary}`,
  },
  learningRow: {
    flexBox: true,
    flexWrap: 'wrap',
    mt: ['20px', '30px', '70px', '80px', '110px'],
  },
  learningContentArea: {
    width: ['80%', '75%', '60%', '50%'],
    mt: ['70px'],
  },
  learningTitle: {
    fontSize: ['20px', '40px', '50px', '60px', '70px'],
    fontWeight: '700',
    color: '#52bd95',
    lineHeight: '1.34',
    mb: ['20px', '20px', '15px', '20px', '20px'],
    pr: ['0', '0', '0', '65px', '65px'],
  },
  learningSubTitle: {
    fontSize: ['18px', '20px', '28px', '30px', '30px'],
    fontWeight: '400',
    color: 'white',
    lineHeight: '1.5',
    mb: '20px',
    pr: ['0', '0', '0', '65px', '65px'],
  },
  learningDescription: {
    fontSize: ['16px', '18px', '22px'],
    color: 'white',
    lineHeight: '1.5',
    mb: '25px',
  },
};

export default DomainSection;
