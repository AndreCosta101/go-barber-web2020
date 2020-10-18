import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

//para poder iniciar um objeto vazio, as AuthContext
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
