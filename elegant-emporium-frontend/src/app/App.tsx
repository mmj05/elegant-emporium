import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/pages/Home';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
