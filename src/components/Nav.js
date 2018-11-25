import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (

  <div>

    <Fragment>
      <div className="button-grid-container">
          <br />
          <br />
          <br />
          <Link to='/play'><button className="play-btn">Play</button></Link>
      </div>

    </Fragment>
  </div>

    
  )
}


export default Nav;
