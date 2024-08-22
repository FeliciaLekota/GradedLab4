import React, { createContext, useState } from 'react';

export const UserContext = createContext();


function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    payment: {},
  });

  const updateUser = (details) => {
    setUser((prevUser) => ({ ...prevUser, ...details }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

