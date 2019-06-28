import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import './trip.css';

function TripInfo({ trip, previous, next, drivers }) {
  console.log(trip);
  console.log(drivers);
  let driver = drivers.filter(driver => driver.driverID === trip.driverID)[0];
  driver = driver ? driver : 'Not Found';
  console.log(driver);

  const label = previous === '/' ? 'Home' : 'Previous';
  const time = new Date(trip.created);
  const day = time.getDay();
  let d;
  day === 1
    ? (d = 'Monday')
    : day === 2
    ? (d = 'Tuesday')
    : day === 3
    ? (d = 'Wednessday')
    : day === 4
    ? (d = 'Thursday')
    : day === 5
    ? (d = 'Friday')
    : day === 6
    ? (d = 'Saturday')
    : day === 0
    ? (d = 'Sunday')
    : (d = 'No day');
  return (
    <section className="trip-page">
      <div className="flex">
        <div className="trip-link">
          <button className="link">
            <Link to={previous}>
              <MdNavigateBefore /> {label}
            </Link>
          </button>
          {next ? (
            <Link to={next}>
              <button className="link">
                Next <MdNavigateNext />
              </button>
            </Link>
          ) : (
            <button>You've Reached The End</button>
          )}
        </div>
      </div>
      <div className="flex flex-space-around">
        <div className="trip">
          <h1>Trip Details</h1>
          <div className="one-item">
            <h2>Identification Number</h2>
            <p>{trip.tripID}</p>
          </div>
          <div className="one-item">
            <h2>Time</h2>
            <p>{`${d} ${time.getDate()},  ${`00${time.getMonth() + 1}`.slice(
              -2,
            )} ${time.getFullYear()}`}</p>
          </div>
          <div className="one-item">
            <h2>User Details</h2>
            <p>Name: {trip.user.name}</p>
            <p>Email: {trip.user.email}</p>
            <p>Phone: {trip.user.phone}</p>
            <p>Gender: {trip.user.gender}</p>
            <p>Company: {trip.user.company}</p>
          </div>
          <div className="one-item">
            <h2>Pick Up Details </h2>
            <p>Pick Up Address: {trip.pickup.address}</p>
            <p>Pick Up Latitude: {trip.pickup.latitude}</p>
            <p>Pick Up Longitude: {trip.pickup.longitude}</p>
          </div>
          <div className="one-item">
            <h2>Destination Details </h2>
            <p>Destination Address: {trip.destination.address}</p>
            <p>Destination Latitude: {trip.destination.latitude}</p>
            <p>Destination Longitude: {trip.destination.longitude}</p>
          </div>
          <div className="one-item">
            <h2>Payment Details</h2>
            <p>Billed Amount: {trip.billedAmount}</p>
            <p>
              Payment Mode: {trip.isCash ? 'Cash Payment' : 'None Cash Payment'}
            </p>
          </div>
        </div>
        <div className="trip">
          <h1>Trip Driver Details</h1>
          <div className="one-item">
            <h2>Identification Number</h2>
            <p>{driver.driverID ? driver.driverID : 'Data Not Found'}</p>
          </div>

          <div className="one-item">
            <h2>Personal Details</h2>
            <p>Name: {driver.name}</p>
            <p>Email: {driver.email}</p>
            <p>Phone: {driver.phone}</p>
            <p>Gender: {driver.gender}</p>
            <p>Company: {driver.agent}</p>
            <p>Address: {driver.address}</p>
          </div>
          <div className="one-item">
            <h2>Vehicle Details </h2>
            <p>
              Amount Of Vehicle:{' '}
              {driver.vehicleID ? driver.vehicleID.length : 'Not Found'}
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="trip-link">
          <Link to={previous}>
            <button>{label}</button>
          </Link>
          {next ? (
            <Link to={next}>
              <button>Next</button>
            </Link>
          ) : (
            <button>You've Reached The End</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TripInfo;
