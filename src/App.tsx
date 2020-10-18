import React from 'react';

// import SignUp from './pages/SignIn';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext'


const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Diego' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);


export default App;
