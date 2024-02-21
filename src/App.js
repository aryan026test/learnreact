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
import UserDetails from './pages/UserDetails.js';
import Profile from './pages/Profile.js';
import { AuthProvider } from './utils/auth.js';
import Login from './pages/Login.js';
import { RequireAuth } from './utils/RequireAuth.js';
import store from './redux/store'
import CoffeePage from './components/CoffeePage.js';
import { Provider } from 'react-redux';
const LazyAbout = React.lazy(() => import('./pages/About.js'))

function App() {
  const [CartItems, setCartItems] = useState([])
  const [pageItems, setPageItems] = useState({})

  return (
    <Provider store={store}>
      <AuthProvider>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<CoffeeShop value={{ CartItems, setCartItems, pageItems, setPageItems }} />} />
            <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>}>
              <Route index element={<Featured />} />
              <Route path='featured' element={<Featured />} />
              <Route path='new' element={<NewProducts />}/>
              <Route />
            </Route>
            <Route path='CoffeePage/:id' element={<CoffeePage value={{ CartItems, setCartItems }}/>} />
            {/* <Route path='users' element={<Users />}>
              <Route path=':userID' element={<UserDetails />}/>
              <Route path='admin' element={<Admin />}/>
            </Route> */}
            {/* <Route path='users' element={<Users />}/> */}
            <Route path='users/:userID' element={<UserDetails />} />
            <Route path='cart' element={<Cart value= {{ CartItems, setCartItems }} />} />
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
    </Provider>
  );
}

export default App;
