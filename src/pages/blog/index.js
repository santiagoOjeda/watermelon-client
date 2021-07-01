import React, { useEffect, useState } from 'react';
import Post from '../../components/post';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import useFetch from '../../hooks/useFetch';

const Blog = () => {
  const URL = 'https://watermelon-server.herokuapp.com/post/all';
  const { postList, isLoading } = useFetch(URL);

  useEffect(() => {
    postList.forEach((element) => console.log(element));
  }, [postList]);

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
