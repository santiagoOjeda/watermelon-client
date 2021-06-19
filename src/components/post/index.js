import React from "react";
import "./styles.scss";
function Post({ bgColor, title, paragraph, author, date }) {
  return (
    <article
      className="wrapper"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="wrapper__text">
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{date}</p>
        <p>{paragraph}</p>
      </div>
    </article>
  );
}

export default Post;
