import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import ImageOne from 'common/src/assets/image/app/astronaut.jpg';
import ImageTwo from 'common/src/assets/image/app/saturn.png';
import colors from 'common/src/theme/app/colors';
import { Link } from 'gatsby';

const IntroSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle,
}) => {
  return (
		<Box {...sectionWrapper} id="control">
			<Container fullWidth noGutter className="control-sec-container">
				<Box {...row} {...imageAreaRow}>
					<Box {...col} {...imageArea}>
						<Card {...imageWrapper} {...imageWrapperOne}>
							<Fade left>
								<Image style={{ width: '620px' }} src={ImageOne} alt="Spaceman" />
							</Fade>
						</Card>
						<Card {...imageWrapper} {...imageWrapperTwo}>
							<Fade bottom>
								<Image style={{ width: '620px' }} src={ImageTwo} alt="Telescope" />
							</Fade>
						</Card>
					</Box>
				</Box>
			</Container>
			<Container>
				<Box {...row} {...textAreaRow}>
					<Box {...col} {...textArea}>
						<FeatureBlock
							title={<Heading content="Galileo as a partner" {...title} />}
							description={
								<Text
									content="We’ve worked FOR people all of our careers. With Galileo, we choose to work WITH partners and cooperate to create amazing technology products and solutions. We look for people and companies that think like us and who are building things that we get excited about. When we find them, we go all in."
									{...description}
								/>
							}
							// button={
							// 	<Link to="/truth">
							// 		<Button title="Truth" {...button} onClick />
							// 	</Link>
							// }
						/>
					</Box>
				</Box>
			</Container>
		</Box>
  );
};

IntroSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
};

IntroSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['40px', '80px'],
    pb: ['40px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
  },
  imageArea: {
    width: ['0px', '0px', '53%', '50%', '50%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
    ml: ['0px', '0px', '-200px', '-250px', '-400px'],
    pointerEvents: 'none',
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: `${colors.primary}`,
    textTransform: 'uppercase',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left'],
  },
  description: {
    fontSize: '16px',
    color: `${colors.textColor}`,
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  button: {
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default IntroSection;
