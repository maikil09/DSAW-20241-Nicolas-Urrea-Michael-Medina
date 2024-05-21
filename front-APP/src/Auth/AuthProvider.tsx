import { useContext, createContext, useState/*, useEffect*/ } from "react";

interface AuthProviderprops{
    children: React.ReactNode;

}
const AuthContext = createContext({
    isAuthenticated: false,
});
export function AuthProvider({children}:AuthProviderprops){
    const [isAuthenticated/*,setIsAuthenticated*/] = useState(false);

    return <AuthContext.Provider value={{isAuthenticated}}>
        {children}
        </AuthContext.Provider>
}
export const useAuth = ()=> useContext(AuthContext);