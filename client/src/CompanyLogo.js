import React from 'react';
import Logo from './image/TechMax.png';

function CompanyLogo() {
  return (
    <>
      <div className="flex flex-center-cross">
        <img src={Logo} className="logo" alt="TechMax" />
        <h1 className="logo-name">TechMax</h1>
      </div>
    </>
  );
}

export default CompanyLogo;
