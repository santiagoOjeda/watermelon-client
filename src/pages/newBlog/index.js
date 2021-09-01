import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Post from '../../components/post';
import TextField from '@material-ui/core/TextField';
import './styles.scss';
import axios from 'axios';
import { CirclePicker } from 'react-color';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useGetDate from '../../hooks/useGetDate';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: '33px',
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: 8,
    marginLeft: -12,
  },
}));

const NewBlog = () => {
  const [newPostData, setNewPostData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [image, setImage] = useState(<h2>kdfkldfl</h2>);

  const classes = useStyles();
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const { date } = useGetDate();

  const handleClick = () => {
    console.log('date', date);
    setIsFetching(true);
    setSuccess(false);
    axios.defaults.baseURL = 'https://watermelon-server.herokuapp.com';
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=utf-8';

    axios({
      method: 'post',
      url: '/post/new',
      data: newPostData,
    }).then(
      () => {
        setIsFetching(false);
        setSuccess(true);
        setNewPostData({});
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleColorChange = (color) => {
    setNewPostData({ ...newPostData, bgColor: color.hex });
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      setNewPostData({
        ...newPostData,
        img: reader.result,
      });
      setImage(reader.result);
      console.log('onload ', newPostData);
    };

    console.log(newPostData);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    setNewPostData({ ...newPostData, date: date });
  }, [date]);

  return (
    <>
      <div className='new-post__wrapper'>
        <div className='new-post__wrapper__top'>
          <Card>
            <CardContent>
              <form noValidate className='new-post__form' autoComplete='off'>
                <TextField
                  id='standard-basic'
                  label='Titulo'
                  onChange={(value) => {
                    setNewPostData({
                      ...newPostData,
                      title: value.target.value,
                    });
                  }}
                />

                <TextField
                  id='standard-multiline-flexible'
                  label='Parrafo'
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
                  id='standard-basic'
                  label='Autor'
                  onChange={(value) => {
                    setNewPostData({
                      ...newPostData,
                      author: value.target.value,
                    });
                  }}
                />

                <br></br>
                <input
                  type='file'
                  id='imageInp'
                  accept='image/png, image/jpeg'
                  onChange={(e) => handleImageChange(e)}
                />
                <br></br>
                <img src={image} alt='hihi' />

                <CirclePicker
                  onChange={handleColorChange}
                  color={newPostData.bgColor}
                />

                <div className={classes.root}>
                  <div className={classes.wrapper}>
                    <Fab
                      aria-label='save'
                      color='primary'
                      className={buttonClassname}
                      onClick={handleClick}
                    >
                      {success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {isFetching && (
                      <CircularProgress
                        size={68}
                        className={classes.fabProgress}
                      />
                    )}
                  </div>
                  <div className={classes.wrapper}>
                    <Button
                      variant='contained'
                      color='primary'
                      className={buttonClassname}
                      disabled={isFetching}
                      onClick={handleClick}
                    >
                      Guardar
                    </Button>
                    {isFetching && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className='new-post__wrapper__bottom'>
          <Post
            title={newPostData.title}
            imgUrl={image}
            paragraph={newPostData.paragraph}
            author={newPostData.author}
            date={newPostData.date}
            bgColor={newPostData.bgColor}
          />
        </div>
      </div>
    </>
  );
};

export default NewBlog;
