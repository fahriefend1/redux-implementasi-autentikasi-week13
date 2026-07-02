import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import LoginAPI from './components/LoginAPI';
import Logout from './components/Logout';

const App = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.auth.user);

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Simple Store</h1>
          <nav>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart ({cartItems.length})</Link>
            {user ? (
              <>
                <span className="user-greeting">Welcome, {user.email}</span>
                <Logout />
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/login-api">Login API</Link>
              </>
            )}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={user ? <Cart /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login-api" element={<LoginAPI />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;