import React from 'react';
import {
  FaUsers,
  FaMale,
  FaFemale,
  FaCar,
  FaCreditCard,
  FaDollarSign,
  FaMoneyBill,
  FaCashRegister,
} from 'react-icons/fa';

function HeaderSummary(props) {
  return (
    <div className="flex flex-space-evenly summary">
      <div className="summary-item">
        <p>
          <FaUsers /> Total Users
        </p>
        <span className="h1">
          {`000${Number(props.male) + Number(props.female)}`.slice(-4)}
        </span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaMale /> Male Users
        </p>
        <span className="h1">{`00000${props.male}`.slice(-4)}</span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaFemale /> Female Users
        </p>
        <span className="h1">{`00000${props.female}`.slice(-4)}</span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaCashRegister /> Total Earnings (In Naira)
        </p>
        <span className="h1">{props.billedTotal}</span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaDollarSign /> Cash Earnings (In Naira)
        </p>
        <span className="h1">{props.cashBilledTotal}</span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaCreditCard /> Card Earnings (In Naira)
        </p>
        <span className="h1">{props.nonCashBilledTotal}</span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaCar /> <FaMoneyBill /> Cash Trips
        </p>
        <span className="h1">{`00000${props.noOfCashTrips}`.slice(-4)}</span>
      </div>
      <div className="summary-item border">
        <p />
        <span className="h1" />
      </div>
      <div className="summary-item">
        <p>
          <FaCar /> <FaCreditCard /> Non Cash Trips
        </p>
        <span className="h1">{`00000${props.noOfNonCashTrips}`.slice(-4)}</span>
      </div>
    </div>
  );
}

export default HeaderSummary;
