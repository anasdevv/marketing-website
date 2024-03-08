import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import { css } from 'styled-components/macro'; //eslint-disable-line

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServiceLandingPage from 'demos/ServiceLandingPage';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<ServiceLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
