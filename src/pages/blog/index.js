import React, { useEffect, useState } from 'react';
import Post from '../../components/post';
import './styles.scss';
import axios from 'axios';

const Blog = () => {
  const [postList, setPostList] = useState([]);

  const URL = 'https://watermelon-server.herokuapp.com/post/all';

  const fetchPost = async () => {
    await axios
      .get(URL)
      .then((response) => {
        setPostList(response.data);
        console.log(response.data);
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

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  return (
    <>
      {postList.map((post) => (
        <Post
          title={post.title}
          imgUrl=''
          paragraph={post.paragraph}
          author={post.author}
          date={post.date}
          bgColor={post.bgColor}
        />
      ))}
    </>
  );
};

export default Blog;
