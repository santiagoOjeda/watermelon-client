import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";
import axios from "axios";

const NewBlog = () => {
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
      data: {
        title: "Finn",
        paragraph: "Williams",
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div className="wrapper">
        <form noValidate autoComplete="off">
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
              setNewPostData({ ...newPostData, paragraph: value.target.value });
            }}
          />
          <Button variant="contained" color="primary" onClick={handleClick}>
            Guardar
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
