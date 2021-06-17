import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";
import axios from "axios";

const NewBlog = () => {
  const [newPostData, setNewPostData] = useState({});
  const URL = "https://watermelon-server.herokuapp.com/post/save";
  const URLmock = "http://localhost:5000/post/save";

  const handleClick = async (value) => {
    axios({
      method: "post",
      url: URL,
      headers: {
        "Content-Type": "application/json",
        "Referrer-Policy": "no-referrer",
      },
      data: {
        firstName: "Finn",
        lastName: "Williams",
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
