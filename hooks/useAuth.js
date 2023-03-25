import React from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        if (user) {
            console.log("User is logged in");
        } else {
            console.log("User is logged out");
        }
    }, [user]);

    const login = () => {
        setUser("New User");
    };

    const memoedValue = React.useMemo(() => ({ user, login }), [user, login]);

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider> 
    );
};

export default function useAuth() {
    return React.useContext(AuthContext);
}