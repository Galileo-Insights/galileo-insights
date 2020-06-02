import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Container from 'common/src/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import SliderDes from '../sliderDescription';
import Image1 from 'common/src/assets/image/app/helmet-1.png';
import Image2 from 'common/src/assets/image/app/helmet-2.png';
import Image3 from 'common/src/assets/image/app/helmet-3.png';
import Image4 from 'common/src/assets/image/app/helmet-4.png';
import Image5 from 'common/src/assets/image/app/helmet-5.png';
import Image6 from 'common/src/assets/image/app/helmet-6.png';
import colors from 'common/src/theme/app/colors';
import Space from 'common/src/assets/image/app/minimal-background.jpg';

const TestimonialSection = ({ sectionWrapper }) => {
  const Data = useStaticQuery(graphql`
    query {
      appJson {
        testimonials {
          id
          name
          designation
          description
        }
      }
    }
  `);

  const images = [
		{
			thumbnail: `${Image1}`,
			thumbnailAlt: 'thumb one',
			description: <SliderDes data={Data.appJson.testimonials[0]} />,
		},
		{
			thumbnail: `${Image2}`,
			thumbnailAlt: 'thumb two',
			description: <SliderDes data={Data.appJson.testimonials[1]} />,
		},
		{
			thumbnail: `${Image3}`,
			thumbnailAlt: 'thumb three',
			description: <SliderDes data={Data.appJson.testimonials[2]} />,
		},
		{
			thumbnail: `${Image4}`,
			thumbnailAlt: 'thumb four',
			description: <SliderDes data={Data.appJson.testimonials[3]} />,
		},
		{
			thumbnail: `${Image5}`,
			thumbnailAlt: 'thumb five',
			description: <SliderDes data={Data.appJson.testimonials[4]} />,
		},
		{
			thumbnail: `${Image6}`,
			thumbnailAlt: 'thumb six',
			description: <SliderDes data={Data.appJson.testimonials[5]} />,
		},
  ];

  return (
		<Box
			style={{ marginBottom: '-40px', paddingTop: '80px', background: `#ffffff url(${Space})`, backgroundSize: 'cover' }}
			{...sectionWrapper}
			className="testimonialSlider"
			id="testimonialSection"
		>
			<Container>
				<Box className="testimonialDesWrapper">
					<ImageGallery
						items={images}
						originalClass="Testimonial-img"
						showPlayButton={false}
						showFullscreenButton={false}
					/>
				</Box>
			</Container>
		</Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  title: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '80px', '80px'],
  },

  sectionSubTitle: {
    content: 'CLIENT TESTIMONIAL',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: `${colors.primary}`,
    textTransform: 'uppercase',
    mb: '10px',
  },
};

export default TestimonialSection;
