import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CategoryCreateScreen from "./screens/CategoryCreateScreen";


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/category/:id/' component={CategoryScreen}  />
            <Route path='/createcategory' component={CategoryCreateScreen}  />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
