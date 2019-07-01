import React from 'react';
import { MdHome } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';
import { FaTable } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DashBoardNav.css';

function DashBoardNav() {
  const items = ['Gender', 'Trips', 'Billings'];
  const tables = ['Trips', 'Drivers', 'Summary'];
  return (
    <>
      <div className="flex left-nav flex-space-evenly">
        <MdHome />
        <details>
          <summary className="overview"> Overview</summary>
          {items.map(item => (
            <p key={item}>{item}</p>
          ))}
        </details>
        <MdExpandMore />
      </div>
      <div className="flex left-nav flex-space-evenly">
        <FaTable />
        <details>
          <summary className="overview"> Tables</summary>
          {tables.map(table => (
            <Link key={table} to={table}>
              <div>{table}</div>
            </Link>
          ))}
        </details>
        <MdExpandMore />
      </div>
    </>
  );
}

export default DashBoardNav;
