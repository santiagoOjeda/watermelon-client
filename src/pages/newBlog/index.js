import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Post from "../../components/post";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";
import axios from "axios";
import { BlockPicker } from "react-color";

const NewBlog = () => {
  const [newPostData, setNewPostData] = useState({});

  const handleClick = (value) => {
    axios.defaults.baseURL = "https://watermelon-server.herokuapp.com";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";

    axios({
      method: "post",
      url: "/post/save",
      data: newPostData,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleColorChange = (color, event) => {
    setNewPostData({ ...newPostData, bgColor: color.hex });
    console.log(color.hex);
  };

  return (
    <>
      <div className="wrapper">
        <form noValidate className="wrapper-form" autoComplete="off">
          <TextField
            id="standard-basic"
            label="Titulo"
            onChange={(value) => {
              setNewPostData({ ...newPostData, title: value.target.value });
            }}
          />

          <TextField
            id="standard-multiline-flexible"
            label="Parrafo"
            multiline
            rowsMax={4}
            onChange={(value) => {
              setNewPostData({
                ...newPostData,
                paragraph: value.target.value,
              });
            }}
          />

          <TextField
            id="standard-basic"
            label="Autor"
            onChange={(value) => {
              setNewPostData({ ...newPostData, author: value.target.value });
            }}
          />

          <br></br>
          <br></br>

          <BlockPicker
            onChange={handleColorChange}
            color={newPostData.bgColor}
          />

          <Button variant="contained" color="primary" onClick={handleClick}>
            Guardar
          </Button>
        </form>
        <div className="wrapper-post">
          <Post
            title={newPostData.title}
            imgUrl=""
            paragraph={newPostData.paragraph}
            author={newPostData.author}
            date={""}
            bgColor={newPostData.bgColor}
          />
        </div>
      </div>
    </>
  );
};

export default NewBlog;
