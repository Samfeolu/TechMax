import React from 'react';
import CompanyLogo from './CompanyLogo';
import AdminNameLogo from './AdminNameLogo';
import DashBoardNav from './DashBoardNav';

function Sidebar() {
  return (
    <div className="sidebar">
      <CompanyLogo />
      <AdminNameLogo />
      <DashBoardNav />
    </div>
  );
}

export default Sidebar;
