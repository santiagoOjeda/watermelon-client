import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [percentDownloaded, setPercentDownloaded] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      await axios
        .get(url, {
          function(req, res) {
            res.header("Access-Control-Allow-Origin", "*");
          },
          onDownloadProgress: (progressEvent) => {
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setPercentDownloaded(percentCompleted);
          },
        })
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

  return { postList, isLoading, percentDownloaded };
};

export default useFetch;
