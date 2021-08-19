import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      await axios
        .get(url)
        .then((response) => {
          setPostList(response.data);
          setIsLoading(false);
        })
        .catch((e) => {
          console.error(e);
        });
    };
    fetchPost();
  }, [url]);
  return { postList, isLoading };
};

export default useFetch;
