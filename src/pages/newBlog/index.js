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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleClick = (value) => {
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
      url: '/post/save',
      data: newPostData,
    }).then(
      (response) => {
        setIsFetching(false);
        setSuccess(true);
        setNewPostData({});
        console.log(response);
      },
      (error) => {
        debugger;
        console.log(error);
      }
    );
  };

  const handleColorChange = (color, event) => {
    setNewPostData({ ...newPostData, bgColor: color.hex });
    console.log(color.hex);
  };

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      <div className='new-post__wrapper'>
        <div className='new-post__wrapper__top'>
          <Card>
            <CardContent>
              <form
                noValidate
                className='new-post__form'
                autoComplete='off'
                method='POST'
                enctype='multipart/form-data'
              >
                <TextField
                  id='title'
                  label='Titulo'
                  onChange={(value) => {
                    setNewPostData({
                      ...newPostData,
                      title: value.target.value,
                    });
                  }}
                />

                <TextField
                  id='paragraph'
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
                  id='author'
                  label='Autor'
                  onChange={(value) => {
                    setNewPostData({
                      ...newPostData,
                      author: value.target.value,
                    });
                  }}
                />

                <br></br>
                <br></br>

                <input type='file' name='image' />
                <Button variant='contained' color='primary' type='submit'>
                  Guardar imagen
                </Button>
                <br></br>
                <br></br>

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
            imgUrl=''
            paragraph={newPostData.paragraph}
            author={newPostData.author}
            date={''}
            bgColor={newPostData.bgColor}
          />
        </div>
      </div>
    </>
  );
};

export default NewBlog;
