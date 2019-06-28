import React from 'react';
import { Link } from 'react-router-dom';

function TripInfo({ trip, previous, next }) {
  console.log(previous, next);
  console.log(trip);
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
      <Link to={previous}>
        <button>{label}</button>
      </Link>
      {next ? (
        <Link to={next}>
          {' '}
          <button>Next</button>
        </Link>
      ) : (
        <button>You've Reached The End</button>
      )}
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

      <Link to={previous}>
        <button>{label}</button>
      </Link>
      {next ? (
        <Link to={next}>
          {' '}
          <button>Next</button>
        </Link>
      ) : (
        <button>You've Reached The End</button>
      )}
    </section>
  );
}

export default TripInfo;
