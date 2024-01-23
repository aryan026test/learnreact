import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar.js'
import CoffeeShop from './pages/CoffeeShop.js';
import Cart from './pages/Cart.js';
import OrderSummary from './pages/OrderSummary.js';
import { NoMatch } from './pages/NoMatch.js';
import { Featured } from './pages/FeaturedProducts.js';
import { NewProducts } from './pages/NewProducts.js';
import Users from './pages/Users.js'
import Admin from './pages/Admin.js';
import UserDetails from './pages/UserDetails.js';
import Profile from './pages/Profile.js';
import { AuthProvider } from './utils/auth.js';
import Login from './pages/Login.js';
import { RequireAuth } from './utils/RequireAuth.js';
import CoffeePage from './components/CoffeePage.js';
const LazyAbout = React.lazy(() => import('./pages/About.js'))

function App() {
  const [ItemsNumber, setItemsNumber] = useState(0)
  const [CartItems, setCartItems] = useState([])

  return (
    <AuthProvider>
      <div className='App'>
        <Navbar value={ItemsNumber} />
        <Routes>
          <Route path='/' element={<CoffeeShop value={{ ItemsNumber, setItemsNumber, CartItems, setCartItems }} />} />
          <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>}>
            <Route index element={<Featured />} />
            <Route path='featured' element={<Featured />} />
            <Route path='new' element={<NewProducts />} />
            <Route />
          </Route>
          <Route path='CoffeePage' element={<CoffeePage />}/>
          {/* <Route path='users' element={<Users />}>
            <Route path=':userID' element={<UserDetails />}/>
            <Route path='admin' element={<Admin />}/>
          </Route> */}
          {/* <Route path='users' element={<Users />}/> */}
          <Route path='users/:userID' element={<UserDetails />} />
          <Route path='cart' element={<Cart value={{ CartItems, setCartItems, setItemsNumber }} />} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='/profile' element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
