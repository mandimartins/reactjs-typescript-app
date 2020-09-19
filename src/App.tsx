import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';
import Home from './pages/Home';

import { useTheme } from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = useTheme('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header isThemeActive={theme} toggleTheme={toggleTheme} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
