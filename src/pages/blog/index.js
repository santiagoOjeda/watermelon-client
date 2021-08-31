import React, { useDebugValue, useEffect, useState } from 'react';
import Post from '../../components/post';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.scss';
import useFetch from '../../hooks/useFetch';

const Blog = () => {
  const URL = 'https://watermelon-server.herokuapp.com/post/all';
  const { postList, isLoading, percentDownloaded } = useFetch(URL);
  const [imageFile, setImageFile] = useState();

  useEffect(() => {}, []);

  const renderImage = (bufferImg) => {
    console.log(atob(bufferImg));
    return atob(bufferImg);

    /*       debugger;
    const reader = new FileReader(bufferImg);
    let image;
    reader.readAsDataURL(bufferImg);
    reader.onload = function () {
      return reader.result;
    };  */
  };

  return (
    <>
      {isLoading ? (
        <div className='blog__loading-wrapper'>
          <CircularProgress variant='determinate' value={percentDownloaded} />
        </div>
      ) : (
        postList.map((post) => (
          <Post
            title={post.title}
            imgUrl={renderImage(post.img)}
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
