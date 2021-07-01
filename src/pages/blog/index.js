import React, { useEffect, useState } from 'react';
import Post from '../../components/post';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import axios from 'axios';

const Blog = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = 'https://watermelon-server.herokuapp.com/post/all';

  const fetchPost = async () => {
    setIsLoading(true);
    await axios
      .get(URL)
      .then((response) => {
        setPostList(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    postList.forEach((element) => console.log(element));
  }, [postList]);

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  return (
    <>
      {isLoading ? (
        <div className='blog__loading-wrapper'>
          <CircularProgress color='secondary' />
        </div>
      ) : (
        postList.map((post) => (
          <Post
            title={post.title}
            imgUrl=''
            paragraph={post.paragraph}
            author={post.author}
            date={post.date}
            bgColor={post.bgColor}
          />
        ))
      )}
    </>
  );
};

export default Blog;
