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
        <p>
          Autor:<span> {author} </span>
          Fecha: <span> {date || "01/01/01"}</span>
        </p>
        <p>{paragraph}</p>
      </div>
    </article>
  );
}

export default Post;
