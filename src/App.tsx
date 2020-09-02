import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  const [isToggleActive, setIsToggleActive] = useState(true);

  const toggleThemeHandler: () => void = () => {
    setIsToggleActive(!isToggleActive);
  };

  return (
    <ThemeProvider theme={isToggleActive ? dark : light}>
      <GlobalStyles />
      <Header isThemeActive={isToggleActive} toggleTheme={toggleThemeHandler} />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
