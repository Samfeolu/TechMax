import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeaderSummary from './HeaderSummary';
import Charts from './Charts';
import TripInfo from './TripInfo';
import { Route } from 'react-router-dom';

function DetailBar() {
  const [navData, setNavData] = useState({});
  const [data, setData] = useState([]);
  const [cash, setCash] = useState([]);
  const [billed, setBilled] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(({ data: serverData }) => {
        console.log(serverData);
        setNavData(serverData);
        setData([
          ['Gender', 'Number of People'],
          ['Male', serverData.male],
          ['Female', serverData.female],
        ]);
        setCash([
          ['Trips', 'Number of Trips'],
          ['Cash', serverData.noOfCashTrips],
          ['Non-Cash', serverData.noOfNonCashTrips],
        ]);
        setBilled([
          ['Billings Type', 'Amount In Naira'],
          ['Billed Total', serverData.billedTotal],
          ['Cash Billed Total', serverData.cashBilledTotal],
          ['Non Cash Billed Total', serverData.nonCashBilledTotal],
        ]);
      })
      .catch(err => console.log(err));

    fetch('api/trips')
      .then(res => res.json())
      .then(res => setTrips(res.data));
  }, []);
  return (
    <>
      <div className="detailbar">
        <Header />
        <HeaderSummary {...navData} />
        {trips.map((trip, index, array) => {
          //   Asign the previous trip id to the variable 'previous' and /(home) if previous doesnt exist. Do same for next
          let previous = index === 0 ? '/' : array[index - 1].tripID;
          let next =
            index === array.length - 1 ? undefined : array[index + 1].tripID;

          return (
            <Route
              key={trip.tripID}
              path={`/${trip.tripID}`}
              render={routeProps => <TripInfo {...{ trip, previous, next }} />}
            />
          );
        })}
        <Route
          exact
          path="/"
          render={routeProps => <Charts {...{ trips, data, billed, cash }} />}
        />
      </div>
    </>
  );
}
export default DetailBar;
