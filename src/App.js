import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar.js'
import CoffeeShop from './pages/CoffeeShop.js';
import About from './pages/About.js';
import Cart from './pages/Cart.js';
import OrderSummary from './pages/OrderSummary.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<CoffeeShop />} />
        <Route path='about' element={<About />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='order-summary' element={<OrderSummary />}/>
      </Routes>
    </div>
  );
}

export default App;
