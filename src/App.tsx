import React from 'react';

// import SignUp from './pages/SignIn';
import SignIn from './pages/SignIn';

import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext'


const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);


export default App;
