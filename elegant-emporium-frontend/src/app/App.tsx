import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
