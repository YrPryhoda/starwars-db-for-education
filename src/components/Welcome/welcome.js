import React from 'react';
import {Link} from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4 my-welcome">
          <Link to="/people/"><img src="/image/star-people.jpg" className="my-image" alt="people"></img> 
          <h4> Star wars characters info</h4>
          </Link>
        </div>
        <div className="col-md-4 my-welcome">
        <Link to="/planets/"><img src="/image/planets.jpg" className="my-image" alt="planets"></img> 
          <h4> Star wars planets info</h4>
          </Link>    
          </div>
        <div className="col-md-4 my-welcome">
        <Link to="/starships/"><img src="/image/starships.jpg" className="my-image" alt="starships"></img> 
          <h4> Starships info</h4>
          </Link>    
          </div>
      </div>
    </div>
  )
}
 

export default Welcome;