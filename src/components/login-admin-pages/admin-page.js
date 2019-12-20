import React from 'react';
import './style.css';
import {Redirect} from 'react-router-dom';

const AdminPage = ({ isLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <div className="jumbotron my-jt">
      <h2 className='text-center'>This page is for admin only</h2>
      </div>
    )
  }
  return (
    <Redirect to="/login" />
  );
}

export default AdminPage;