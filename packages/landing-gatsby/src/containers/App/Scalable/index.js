import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import { ScalableWrapper, FeatureSection } from './scalable.style';
import Agile from 'common/src/assets/image/app/agile-blank.svg';
import Concept from 'common/src/assets/image/app/concept-blank.svg';
import Infrastructure from 'common/src/assets/image/app/infrastructure-blank.svg';
import Software from 'common/src/assets/image/app/software-blank.svg';
import Ux from 'common/src/assets/image/app/ux-blank.svg';

const ScalableHistory = ({
  row,
  col,
  title,
  right,
  description,
  sectionSubTitle,
  cardArea,
  learningTitle,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appJson {
        scalableFeature {
          title
          des
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
		<ScalableWrapper style={{ marginBottom: '40px' }}id="scalable">
			<Container noGutter mobileGutter>
				<Heading content="Sweet Spots" {...learningTitle} />
				<Box className="row" {...row}>
					<Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
						<FeatureBlock
							title={<Heading {...right} content="Road Mapping" {...title} />}
							description={
								<Text
									{...right}
									content="Conceptual product and business road mapping."
									{...description}
								/>
							}
						/>
					</Box>
					<Box className="colright" {...col} {...cardArea}>
						<Image src={Concept} className="ScalableImage" alt="Scalable Section Image" />
					</Box>
				</Box>
			</Container>
			<Container noGutter mobileGutter>
				<Box className="row" {...row}>
					<Box className="colright" {...col} {...cardArea}>
						<Image src={Ux} className="ScalableImage" alt="Scalable Section Image" />
					</Box>
					<Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
						<FeatureBlock
							title={<Heading content="UX" {...title} />}
							description={
								<Text content="User Experience, Accessibility, Design and Research." {...description} />
							}
						/>
					</Box>
				</Box>
			</Container>
			<Container noGutter mobileGutter>
				<Box className="row" {...row}>
					<Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
						<FeatureBlock
							title={<Heading {...right} content="Agile" {...title} />}
							description={
								<Text
									{...right}
									content="Agile development methods, cultures and tools."
									{...description}
								/>
							}
						/>
					</Box>
					<Box className="colright" {...col} {...cardArea}>
						<Image src={Agile} className="ScalableImage" alt="Scalable Section Image" />
					</Box>
				</Box>
			</Container>
			<Container noGutter mobileGutter>
				<Box className="row" {...row}>
					<Box className="colright" {...col} {...cardArea}>
						<Image src={Infrastructure} className="ScalableImage" alt="Scalable Section Image" />
					</Box>
					<Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
						<FeatureBlock
							title={<Heading content="Architecture" {...title} />}
							description={
								<Text
									content="All elements of system infrastructure solution architectures."
									{...description}
								/>
							}
						/>
					</Box>
				</Box>
			</Container>
			<Container noGutter mobileGutter>
				<Box className="row" {...row}>
					<Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
						<FeatureBlock
							title={<Heading {...right} content="Development" {...title} />}
							description={
								<Text
									{...right}
									content="Software and solution engineering and development."
									{...description}
								/>
							}
						/>
					</Box>
					<Box className="colright" {...col} {...cardArea}>
						<Image src={Software} className="ScalableImage" alt="Scalable Section Image" />
					</Box>
				</Box>
			</Container>
		</ScalableWrapper>
  );
};

// Transactions style props
ScalableHistory.propTypes = {
	sectionHeader: PropTypes.object,
	sectionTitle: PropTypes.object,
	sectionSubTitle: PropTypes.object,
	row: PropTypes.object,
	col: PropTypes.object,
	featureTitleStyle: PropTypes.object,
	featureDescriptionStyle: PropTypes.object,
	learningTitle: PropTypes.object,
};

// Scalable default style
ScalableHistory.defaultProps = {
	right: {
		textAlign: 'right',
		color: 'red',
	},
	// Scalable section row default style
	row: {
		justifyContent: 'center',
		flexBox: true,
		flexWrap: 'wrap',
		ml: '-15px',
		mr: '-15px',
	},
	// Scalable section col default style
	col: {
		ml: [0, 70, 70],
		mr: [0, 0, 70],
		pr: '15px',
		pl: '15px',
		width: [1 / 2, 1 / 4, 1 / 4, 1 / 4, 1 / 4],
		flexBox: true,
		alignSelf: 'center',
	},
	learningTitle: {
		fontSize: ['42px', '42px', '44px', '50px', '60px'],
    fontWeight: '700',
    textAlign: 'center',
		color: '#52bd95',
		lineHeight: '1.34',
		mb: ['20px', '20px', '15px', '20px', '20px'],
		pr: ['0', '0', '0', '65px', '65px'],
	},
	// Scalable section title default style
	title: {
		fontSize: ['24px', '26px', '30px', '36px', '40px'],
		lineHeight: ['30px', '32px', '40px', '50px', '55px'],
		fontWeight: '700',
		color: '#32325d',
		letterSpacing: '-0.010em',
		mb: '20px',
		maxWidth: ['100%', '100%', '100%', '100%', '415px'],
	},
	// Scalable section description default style
	description: {
		fontSize: ['14px', '16px', '20px', '26px', '26px'],
		fontWeight: '400',
		color: '#525f7f',
		lineHeight: '28px',
		mb: ['25px', '25px', '30px', '30px', '45px'],
		maxWidth: ['100%', '100%', '100%', '100%', '430px'],
	},
	sectionSubTitle: {
		as: 'span',
		textAlign: 'left',
		fontSize: ['16px', '16px', '18px', '20px', '20px'],
		fontFamily: 'Poppins',
		fontWeight: '600',
		lineHeight: '27px',
		color: '#525f7f',
	},
	// Button default style
	btnStyle: {
		minWidth: '156px',
		fontSize: '14px',
		fontWeight: '500',
	},
	featureTitleStyle: {
		fontSize: ['18px', '18px', '20px', '20px', '20px'],
		lineHeight: ['1', '1', '1', '1', '1'],
		fontWeight: '500',
		color: '#32325d',
		letterSpacing: '-0.010em',
		mb: '10px',
	},
	// Scalable section description default style
	featureDescriptionStyle: {
		fontSize: '16px',
		fontWeight: '400',
		color: '#525f7f',
		lineHeight: '27px',
	},
};

export default ScalableHistory;
