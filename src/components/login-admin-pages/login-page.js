import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return (<Redirect to="/admin" />)
  } else {
    return (
      <div className='container' >
        <h2 className="text-center"> Login to continue</h2>
        <div className="col-md-6 offset-md-3" id="for-warning">
          <form id='form' onSubmit={onLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="name" className="form-control" id="name" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;