import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="btn-logout">
      Logout
    </button>
  );
};

export default Logout;