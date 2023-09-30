import {useContext, useState} from 'react';
import axios from 'axios';
import {UserContext} from '../context/userContext';
import {toast} from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000/auth';

export const useRegisterApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //   const [status, setStatus] = useState(false);


  const {user, saveUser} = useContext(UserContext);

  // register user
  const registerUser = async (inputValues) => {
    setLoading(true);
    await axios.post('/register', inputValues)
        .then((response) => {
          const {_id, userName, email, gender, age,
            deposit, createdAt} = response.data;
          saveUser({
            id: _id,
            userName,
            email,
            gender,
            age,
            deposit,
            createdAt,
          });
          localStorage.setItem('registeredUser', JSON.stringify(response.data));
          toast('Registered Account Succesfully');
        // navigate('/');
        })
        .catch((err) => {
          setError(err.message);
        });
    setLoading(false);
  };
  return {registerUser, user, loading, error};
};
