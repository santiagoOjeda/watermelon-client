import React from "react";
import Post from "../../components/post";
import "./styles.scss";
function Blog() {
  async function getData(
    url = "https://watermelon-server.herokuapp.com/post/all",
    data = {}
  ) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  getData();

  return (
    <>
      <Post
        bgColor="red"
        title="Titulo"
        imgUrl=""
        text="In in officia incididunt enim anim labore est nostrud excepteur amet.
          Aute velit occaecat amet labore ea occaecat duis dolore culpa eiusmod
          ipsum do culpa. Esse incididunt ullamco velit aliqua consequat veniam
          duis. Eu eiusmod esse eiusmod nostrud. Eu deserunt est minim aliquip
          consequat irure et enim excepteur. Sunt cupidatat duis tempor ipsum ut
          id in consectetur laborum sint consequat sint id officia."
      />
      <Post
        bgColor="red"
        title="Titulo"
        imgUrl=""
        text="In in officia incididunt enim anim labore est nostrud excepteur amet.
          Aute velit occaecat amet labore ea occaecat duis dolore culpa eiusmod
          ipsum do culpa. Esse incididunt ullamco velit aliqua consequat veniam
          duis. Eu eiusmod esse eiusmod nostrud. Eu deserunt est minim aliquip
          consequat irure et enim excepteur. Sunt cupidatat duis tempor ipsum ut
          id in consectetur laborum sint consequat sint id officia."
      />
      <Post
        bgColor="red"
        title="Titulo"
        imgUrl=""
        text="In in officia incididunt enim anim labore est nostrud excepteur amet.
          Aute velit occaecat amet labore ea occaecat duis dolore culpa eiusmod
          ipsum do culpa. Esse incididunt ullamco velit aliqua consequat veniam
          duis. Eu eiusmod esse eiusmod nostrud. Eu deserunt est minim aliquip
          consequat irure et enim excepteur. Sunt cupidatat duis tempor ipsum ut
          id in consectetur laborum sint consequat sint id officia."
      />
    </>
  );
}

export default Blog;
