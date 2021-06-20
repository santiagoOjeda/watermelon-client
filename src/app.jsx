import React, { Fragment} from 'react';
import './styles/main.scss';
import Blog from './pages/blog';
import NewBlog from './pages/newBlog';
import Nav from './components/shared/nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


const App = () => {
  return (
    <Router>
      <>
        <Nav/>
        <Switch>
          <Route path="/new-post">
            <Blog />
          </Route>
          <Route path="/">
          <NewBlog />
          </Route>
        </Switch>
      </>
    </Router>
  );
};



export default App;
