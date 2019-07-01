import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Table({ trips }) {
  return (
    <>
      <div className="flex flex-space-evenly table-title">
        <p>Info</p>
        <p>Trip ID</p>
        <p>Username</p>
        <p>Gender</p>
      </div>
      {trips.map(trip => {
        return (
          <Link className="table-item" key={trip.tripID} to={`${trip.tripID}`}>
            <div className="flex flex-space-evenly table-item hover">
              <p>
                <button className="single-trip-button">
                  <span className="button-info">
                    <FaInfoCircle /> View
                  </span>
                </button>
              </p>
              <p title={trip.tripID}>{trip.tripID.slice(0, 8) + '...'}</p>
              <p>{trip.user.name}</p>
              <p>{trip.user.gender}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Table;
