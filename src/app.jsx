import React, { Fragment} from 'react';
import './styles/main.scss';
import Blog from './pages/blog';
import NewBlog from './pages/newBlog';
import Nav from './components/shared/nav';
import CircleMenu from './components/circle-menu';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route exact path="/new-post">
            <NewBlog />
          </Route>
        </Switch>
      </>
    </Router>
  );
};



export default App;
