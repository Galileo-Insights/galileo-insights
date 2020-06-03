import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import Box from 'reusecore/src/elements/Box';
import Button from 'reusecore/src/elements/Button';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import { plus } from 'react-icons-kit/feather/plus';
import { ButtonWrapper } from '../../../../../common/src/components/FeatureBlock/featureBlock.style';
import ProcessItem from './process.style';
import Space from 'common/src/assets/image/app/galaxy.jpg';

const ProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
  learningList,
  listItem,
  listText,
  button,
	listTitle,
	astronauts,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      appJson {
        processSteps {
          title
          description
          image {
            publicURL
          }
        }
        serviceList {
          title
          listItems {
            content
          }
        }
      }
    }
  `);

  return (
		<Box {...sectionWrapper} as="section" id="process_section">
			<Container noGutter mobileGutter width="1200px">
				<Box {...secTitleWrapper}>
					<Heading
						{...secTitle}
						content="We are honest, hardworking, amazing, and agile business technologists.  If we can, we do.   If we can’t, we will say so."
					/>
					<Text
						{...secDescription}
						content="We have opinions and advice that we want to share, but we are not consultants.  We hope that you listen to our advice, and we want to roll up our sleeves, get with you in the trench and deliver. A proper blend of our teams, working on the right work, can improve the value of your company to investors."
					/>
				</Box>
				<div
					style={{
						background: `url(${Space})`,
						height: '50px',
						backgroundPosition: 'center -366px',
						boxShadow: '4px 6px 5px',
					}}
				/>
				<Heading
					style={{ paddingRight: '0px', textAlign: 'center', marginTop: '60px', marginBottom: '60px' }}
					content="Winning Products"
					{...learningTitle}
				/>
				<Box {...processRow}>
					{Data.appJson.processSteps.map((item, index) => (
						<Box {...processCol} key={`process-item-${index}`} className="process_item_col">
							<ProcessItem className="process_item">
								<Image
									src={item.image.publicURL}
									alt={`process-image-${index + 1}`}
									{...processImageStyle}
								/>
								<Heading as="h3" content={item.title} {...processTitleStyle} />
								<Text content={item.description} {...processDescriptionStyle} />
							</ProcessItem>
						</Box>
					))}
				</Box>
				<div
					style={{
						background: `url(${Space})`,
						height: '50px',
						backgroundPosition: 'center -740px',
						boxShadow: '4px 6px 5px',
					}}
				/>

				<Box {...learningRow}>
					<Box {...learningContentArea}>
						<Heading content="Winning Business Structure" {...learningTitle} />
						<Text
							content="As technology professionals, we have amassed centuries of experience.  As a 4 year old company, we are honored that each of our clients have returned after the initial engagement to partner repeatedly."
							{...learningSubTitle}
						/>
						<Text {...learningDescription} content="We are comfortable in any ‘is state’." />
					</Box>

					<Box {...learningListArea}>
						{Data.appJson.serviceList.map((serviceList, index) => (
							<Box {...learningList} key={`serviceList-${index}`}>
								<Heading content={serviceList.title} {...listTitle} />
								{serviceList.listItems.map((item, index) => (
									<Box {...listItem} key={`list-item-${index}`}>
										<Icon icon={item.icon || plus} size={item.iconSize || 12} />
										<Text as="span" content={item.content} {...listText} />
									</Box>
								))}
							</Box>
						))}
						<ButtonWrapper style={{ alignItems: 'center', display: 'flex' }} className="button__wrapper">
							<Link to="/expertise">
								<Button title="Expertise" {...button} onClick />
							</Link>
						</ButtonWrapper>
					</Box>
				</Box>
			</Container>
		</Box>
  );
};

ProcessSection.propTypes = {
	sectionWrapper: PropTypes.object,
	secTitleWrapper: PropTypes.object,
	secTitle: PropTypes.object,
	secDescription: PropTypes.object,
	processRow: PropTypes.object,
	processCol: PropTypes.object,
	processImageStyle: PropTypes.object,
	processTitleStyle: PropTypes.object,
	processDescriptionStyle: PropTypes.object,
	learningRow: PropTypes.object,
	learningContentArea: PropTypes.object,
	learningListArea: PropTypes.object,
	learningTitle: PropTypes.object,
	learningSubTitle: PropTypes.object,
	learningDescription: PropTypes.object,
	buttonWrapper: PropTypes.object,
	buttonLabelStyle: PropTypes.object,
	buttonStyle: PropTypes.object,
	learningList: PropTypes.object,
	listItem: PropTypes.object,
	listText: PropTypes.object,
	listTitle: PropTypes.object,
	button: PropTypes.object,
	astronauts: PropTypes.object,
};

ProcessSection.defaultProps = {
	sectionWrapper: {
		pt: ['30px', '40px'],
		pb: ['10px', '40px', '30px', '50px', '50px'],
	},
	secTitleWrapper: {
		mb: ['60px', '70px'],
	},
	secTitle: {
		fontSize: ['22px', '26px', '26px', '30px', '30px'],
		fontWeight: '700',
		color: '#302b4e',
		lineHeight: '1.34',
		mb: ['15px', '18px', '18px', '20px', '20px'],
		textAlign: 'center',
	},
	secDescription: {
		fontSize: ['15px', '16px'],
		fontWeight: '400',
		color: '#43414e',
		lineHeight: '1.5',
		mb: '0',
		textAlign: 'center',
	},
	processRow: {
		flexBox: true,
		flexWrap: 'wrap',
		ml: ['0', '-15px', '-30px', '-70px', '-70px'],
		mr: ['0', '-15px', '-30px', '-70px', '-70px'],
	},
	processCol: {
		width: [1, 1 / 2],
		pl: ['0', '15px', '30px', '70px', '70px'],
		pr: ['0', '15px', '30px', '70px', '70px'],
		mb: '40px',
	},
	processImageStyle: {
		ml: 'auto',
		mr: 'auto',
		mb: '35px',
	},
	processTitleStyle: {
		fontSize: ['20px', '18px', '20px', '20px', '20px'],
		fontWeight: '600',
		color: '#302b4e',
		textAlign: 'center',
		mb: ['20px', '20px', '27px', '27px', '27px'],
	},
	processDescriptionStyle: {
		fontSize: ['15px', '15px', '16px', '16px'],
		fontWeight: '400',
		color: '#43414e',
		textAlign: 'center',
		lineHeight: '1.5',
	},
	learningRow: {
		flexBox: true,
		flexWrap: 'wrap',
		mt: ['20px', '30px', '70px', '80px', '110px'],
	},
	learningContentArea: {
		width: ['100%', '100%', '50%', '50%', '50%'],
		pr: ['0px', '0px', '60px', '80px', '160px'],
		mb: ['70px', '70px', '0', '0', '0'],
	},
	learningTitle: {
		fontSize: ['22px', '22px', '24px', '30px', '30px'],
		fontWeight: '700',
		color: '#302b4e',
		lineHeight: '1.34',
		mb: ['20px', '20px', '15px', '20px', '20px'],
		pr: ['0', '0', '0', '65px', '65px'],
	},
	learningSubTitle: {
		fontSize: ['16px', '16px', '18px', '20px', '20px'],
		fontWeight: '400',
		color: '#43414e',
		lineHeight: '1.5',
		mb: '20px',
		pr: ['0', '0', '0', '65px', '65px'],
	},
	learningDescription: {
		fontSize: '16px',
		color: '#43414e',
		lineHeight: '1.5',
		mb: '25px',
	},
	buttonWrapper: {
		flexBox: true,
		alignItems: 'center',
		mt: ['30px', '40px', '40px', '80px', '80px'],
		flexWrap: ['wrap'],
	},
	buttonLabelStyle: {
		fontSize: '16px',
		fontWeight: '500',
		color: '#3444f1',
		mb: ['20px', '20px', '20px', '0', '0'],
		mr: '30px',
		width: ['100%', '100%', '100%', 'auto', 'auto'],
	},
	buttonStyle: {
		type: 'button',
		fontSize: '16px',
		fontWeight: '500',
		color: '#fff',
		pl: '23px',
		pr: '23px',
	},
	learningListArea: {
		width: ['100%', '100%', '50%', '50%', '50%'],
		flexBox: true,
		flexWrap: 'wrap',
	},
	learningList: {
		width: ['100%', '33.3333333%', '50%', '50%', '50%'],
		pl: ['0', '0', '35px', '35px', '35x'],
		pr: ['0', '30px', '0', '0', '0'],
		mb: ['40px', '40px', '60px', '80px', '90px'],
	},
	listTitle: {
		fontSize: '20px',
		fontWeight: '600',
		color: '#302b4e',
		mb: '25px',
	},
	listItem: {
		flexBox: true,
		alignItems: 'center',
		color: '#43414e',
		mb: '16px',
	},
	listText: {
		fontSize: '16px',
		fontWeight: '400',
		color: '#43414e',
		mb: '0',
		ml: '5px',
	},
	button: {
		type: 'button',
		minWidth: ['186px', '227px'],
		minHeight: ['40px', '69px'],
		fontSize: ['18px', '26px'],
		fontWeight: '500',
		color: '#fff',
		borderRadius: '4px',
		pl: '22px',
		pr: '22px',
		colors: 'primaryWithBg',
	},
	astronauts: {
		height: '200',
	},
};

export default ProcessSection;
