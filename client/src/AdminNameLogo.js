import React from 'react';
import AdminLogo from './image/bob.jpg';

function AdminNameLogo() {
  return (
    <>
      <div className="flex flex-space-evenly admin-logo">
        <img src={AdminLogo} className="Admin" alt="Admin" />
        <div className="">
          <p>Welcome,</p>

          <p>Adedunye Adedayo</p>
        </div>
      </div>
    </>
  );
}
export default AdminNameLogo;
