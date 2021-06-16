import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";
import Axios from "axios";

const NewBlog = () => {
  const [newPostData, setNewPostData] = useState({});
  const URL = "https://watermelon-server.herokuapp.com/post/save";
  const URLmock = "http://localhost:5000/post/save";

  const handleClick = async (value) => {
    /*    Axios({
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      url: URL,
      data: {
        title: "app",
        paragraph: "appapp apapapapap",
      },
    }) */
    Axios.post(
      URL,
      {
        title: "app",
        paragraph: "appapp apapapapap",
      },
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        crossdomain: true,
      }
    )
      .then(function (response) {
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });

    /*   await axios
      .post(
        URL,
        {
          title: "app",
          paragraph: "appapp apapapapap",
        },
        { headers, crossdomain: true }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      }); */
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
