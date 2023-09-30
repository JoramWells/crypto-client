import axios from 'axios';
import {useEffect, useState} from 'react';

const useAdminApis = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [loadingDelete, setLoadingDelete] = useState(false);


  const getRegisteredUsers = async () => {
    setLoading(true);
    await axios.get('http://localhost:5000/auth/getAllUsers')
        .then((response)=>{
          setRegisteredUsers(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((err)=>{
          setLoading(false);
          console.log(err.message);
        });
    setLoading(false);
  };


  useEffect(() => {
    getRegisteredUsers();
    // console.log([registeredUsers]);
  }, []);

  return {registeredUsers, loading, getRegisteredUsers};
};

export default useAdminApis;
