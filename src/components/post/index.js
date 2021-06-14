import React from "react";
import "./styles.scss";
function Post({ bgColor, title, text }) {
  return (
    <article
      className="wrapper"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/*     <img
        src='https://cdn.atomix.vg/wp-content/uploads/2021/06/New-Project-31.jpg'
        alt='Girl in a jacket'
      ></img> */}
      <div className="wrapper__text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default Post;
