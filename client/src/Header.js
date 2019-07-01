import React from 'react';
import AdminLogo from './image/bob.jpg';
import { Link } from 'react-router-dom';

function Header() {
  const items = ['Home', 'About', 'Drivers'];
  const routes = ['/', 'about', 'drivers'];
  return (
    <>
      <header>
        <nav className="flex flex-end flex-align-center">
          {items.map((item, index) => (
            <Link key={item} to={routes[index]}>
              <div>{item}</div>
            </Link>
          ))}
          <img src={AdminLogo} alt="Admin" />
        </nav>
      </header>
    </>
  );
}
export default Header;
