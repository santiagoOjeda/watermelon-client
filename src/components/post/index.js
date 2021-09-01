import React, { useEffect } from 'react';
import './styles.scss';
function Post({ bgColor, title, paragraph, author, date, imgUrl }) {
  console.log('IMG POST ', imgUrl);
  return (
    <article
      className='wrapper'
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className='wrapper__text'>
        <h1>{title}</h1>
        <p>
          Autor:<span> {author} </span>
          Fecha: <span> {date || '01/01/01'}</span>
        </p>
        <p>{paragraph}</p>
      </div>
      <img src={imgUrl} alt='ACA VA EL BG' />
      <div
        className='wrapper__bg'
        style={{
          backgroundColor: bgColor,
          width: '100%',
          height: '100%',
          top: '0',
          position: 'absolute',
        }}
      ></div>
    </article>
  );
}

export default Post;
