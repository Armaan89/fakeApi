
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
        <Routes>

      <Route path='/' exact element={<ProductListing/>}/>
      <Route path='/product/:productId' exact  element={<ProductDetails/>}/>
      <Route> 404 Not Found!</Route>
      </Routes>
</Router>
    </div>
  );
}

export default App;
