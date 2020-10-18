import React from 'react';

// import SignUp from './pages/SignIn';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);
export default App;
