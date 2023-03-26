import React from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [tag, setTag] = React.useState(null);

    React.useEffect(() => {
        if (user) {
            console.log("User is logged in");
        } else {
            console.log("User is logged out");
        }
    }, [user]);

    const login = () => {
        setUser("New User");
        setTag("No Preference");
    };

    const setNewTag = (tag) => {
        setTag(tag);
    };

    const memoedValue = React.useMemo(() => ({ user, tag, login, setNewTag }), [user, tag, login, setNewTag]);

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider> 
    );
};

export default function useAuth() {
    return React.useContext(AuthContext);
}