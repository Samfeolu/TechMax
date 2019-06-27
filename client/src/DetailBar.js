import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeaderSummary from './HeaderSummary';

import Chart from 'react-google-charts';
const options = {
  title: 'User Information By Gender',
  pieHole: 0,
  is3D: true,
};
const cashOptions = {
  title: 'Trip Information By Cash or Non-Cash',
  pieHole: 0,
  is3D: true,
};
const billedOptions = {
  title: 'Trip Information By Amount Billed',
  pieHole: 0,
  is3D: true,
};
function DetailBar() {
  const [navData, setNavData] = useState({});
  const [data, setData] = useState([]);
  const [cash, setCash] = useState([]);
  const [billed, setBilled] = useState([]);

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
          ['Non Cash Billed Total', serverData.nonCashBilledTotal],
          ['Cash Billed Total', serverData.cashBilledTotal],
        ]);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <div className="detailbar">
        <Header />
        <HeaderSummary {...navData} />
        <div className="flex chart flex-space-evenly">
          <Chart
            chartType="PieChart"
            height="400px"
            data={data}
            options={options}
          />
          <Chart
            chartType="PieChart"
            height="400px"
            data={cash}
            options={cashOptions}
          />
        </div>
        <div className="flex flex-center-main chart">
          <Chart
            chartType="Bar"
            height="400px"
            width="100%"
            data={billed}
            options={billedOptions}
          />
        </div>
      </div>
    </>
  );
}
export default DetailBar;
