import React, { Fragment} from 'react';
import './styles/main.scss';
import Blog from './pages/blog';
import Nav from './components/shared/nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <>
        <Nav/>
        <Switch>
          <Route path="/">
            <Blog />
          </Route>
        </Switch>
      </>
    </Router>
  );
};



export default App;
