import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { appTheme } from 'common/src/theme/app';
import {
  GlobalStyle,
  AppWrapper,
} from '../containers/App/app.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/App/Navbar';
import DomainSection from '../containers/App/Banner';
import FeatureSection from '../containers/App/FeatureSection';
import Footer from '../containers/App/Footer';
import '@redq/reuse-modal/es/index.css';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Fragment>
        <SEO title="Galileo Insights" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Navbar />
          <DomainSection />
          <FeatureSection />
          <Footer />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
