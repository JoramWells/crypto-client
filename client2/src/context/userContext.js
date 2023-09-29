import {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext(null);

// UserContext Provider
const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    id: '',
    userName: '',
    email: '',
    gender: '',
    age: '',
    createdAt: new Date(),
  });

  const saveUser = (user) => {
    const newUser = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      gender: user.gender,
      age: user.age,
      createdAt: user.createdAt,
    };
    setUser(newUser);
  };


  return (
    <UserContext.Provider value={{user, saveUser}}>
      {children}
    </UserContext.Provider>

  );
};

export default UserContextProvider;

UserContextProvider.propTypes = {
  children: PropTypes.node,
};


