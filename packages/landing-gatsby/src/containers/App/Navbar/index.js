import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'reusecore/src/elements/Navbar';
import Button from 'reusecore/src/elements/Button';
import Logo from 'reusecore/src/elements/UI/Logo';
import { Container } from './navbar.style';
import { openModal, closeModal } from '@redq/reuse-modal';
import LoginModal from '../LoginModal';
import { Link } from 'gatsby';

import LogoImage from 'common/src/assets/image/app/galileo-logo.svg';

// Default close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const Navbar = ({ navbarStyle, logoStyle }) => {
  // Authentication modal handler
  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Link to="/">
          <Logo
            as="span"
            logoSrc={LogoImage}
            title="Galileo Insights"
            logoStyle={logoStyle}
          />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/truth">
            <Button
              variant="textButton"
              title="Truth"
            />
          </Link>
          <Link to="/expertise">
            <Button
              variant="textButton"
              title="Expertise"
            />
          </Link>
          <Button
            onClick={handleLoginModal}
            variant="textButton"
            title="Study"
            aria-label="login"
          />
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: ['200px'],
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
};

export default Navbar;
