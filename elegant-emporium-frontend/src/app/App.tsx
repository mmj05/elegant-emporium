import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/pages/Home';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
