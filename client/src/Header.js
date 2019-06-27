import React from 'react';
import AdminLogo from './image/bob.jpg';

function Header() {
  const items = ['Home', 'About'];
  return (
    <>
      <header>
        <nav className="flex flex-end flex-align-center">
          {items.map(item => (
            <div key={item}>{item}</div>
          ))}
          <img src={AdminLogo} alt="Admin" />
        </nav>
      </header>
    </>
  );
}
export default Header;
