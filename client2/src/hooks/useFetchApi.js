import axios from 'axios';
import {useEffect, useState} from 'react';

export const useFetchApi = () => {
  const [status, setStatus] = useState();
  const [statusText, setStatusText] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const fetchData = async (url) =>{
    setLoading(true);
    await axios.get(url)
        .then((response)=>{
          setStatus(response.status);
          setStatusText(response.statusText);
          setData(response.data);
          setLoading(false);
        })
        .catch((err)=>{
          setError(err.message);
          setLoading(false);
          console.log(err);
        });
  };

  useEffect(()=>{
    fetchData();
  }, []);
  return {status, statusText, data, error, loading};
};
