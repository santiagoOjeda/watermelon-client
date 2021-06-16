import React, { useEffect, useState } from "react";
import Post from "../../components/post";
import "./styles.scss";
import axios from "axios";

const Blog = () => {
  const [postList, setPostList] = useState([]);

  const URL = "https://watermelon-server.herokuapp.com/post/all";

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

  return (
    <>
      {postList.map((post) => (
        <Post
          bgColor="red"
          title={post.title}
          imgUrl=""
          text={post.paragraph}
        />
      ))}
    </>
  );
};

export default Blog;
