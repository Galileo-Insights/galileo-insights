import React from 'react';
import Particles from 'react-particles-js';
import Img1 from 'common/src/assets/image/app/ball27x29.png';
import Img2 from 'common/src/assets/image/app/ball39x35.png';
import Img3 from 'common/src/assets/image/app/ball41x35.png';
import Img4 from 'common/src/assets/image/app/ball69x64.png';
import Img5 from 'common/src/assets/image/app/ball147x149.png';
import Img6 from 'common/src/assets/image/app/ball121x113.png';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 5,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Img1}`,
                  width: 27,
                  height: 29,
                },
                {
                  src: `${Img2}`,
                  width: 39,
                  height: 35,
                },
                {
                  src: `${Img3}`,
                  width: 41,
                  height: 35,
                },
                {
                  src: `${Img4}`,
                  width: 69,
                  height: 64,
                },
                {
                  src: `${Img5}`,
                  width: 147,
                  height: 149,
                },
                {
                  src: `${Img6}`,
                  width: 121,
                  height: 113,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 11,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.8, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;
