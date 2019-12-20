import React from 'react';
import './error-catch.css';
import icon from './errs-2.jpg';

const ErrorCatch = () => {
return (
<div className='error-div'>
  <h4 className="text-center text-warning">Warning!</h4>
  <p className="text-content text-warning text-center"> Something goes wrong, planet not found. We'll try to fix it as soon as it possible</p>
  <div className='d-flex justify-content-center'>
<img className=' icon-error ' src={icon} alt='icon-item' />
</div>
</div>
);
}


export default ErrorCatch;