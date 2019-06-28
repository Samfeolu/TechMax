import React from 'react';
import Logo from './image/TechMax.png';
import { Link } from 'react-router-dom';

function CompanyLogo() {
  return (
    <>
      <Link className="logo-link" to="/">
        <div className="flex flex-center-cross">
          <img src={Logo} className="logo" alt="TechMax" />
          <h1 className="logo-name">TechMax</h1>
        </div>
      </Link>
    </>
  );
}

export default CompanyLogo;
