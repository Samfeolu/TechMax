import React from 'react';
import Table from './Table';
import Chart from 'react-google-charts';

function Charts({ data, cash, billed, trips, drivers }) {
  const options = {
    pieHole: 0,
    is3D: true,
  };
  const cashOptions = {
    pieHole: 0,
    is3D: true,
  };
  const billedOptions = {
    title: 'Trip Information By Amount Billed',
    pieHole: 0,
    is3D: true,
  };
  return (
    <>
      <div className="flex chart flex-space-evenly">
        <div className="pie-chart">
          <h3>Users Gender Information</h3>
          <Chart
            chartType="PieChart"
            height="20em"
            width="20em"
            data={data}
            options={options}
          />
        </div>
        <div className="pie-chart">
          <h3>Trips Cash Information</h3>
          <Chart
            chartType="PieChart"
            height="20em"
            width="20em"
            data={cash}
            options={cashOptions}
          />
        </div>
      </div>
      <div className="flex-center-main chart">
        <div className="bar-chart">
          <h3>Billings Information</h3>
          <Chart
            chartType="Bar"
            height="400px"
            width="100%"
            data={billed}
            options={billedOptions}
          />
        </div>
      </div>
      <div className="table-wrapper">
        <h3>Trips Information</h3>
        <div className="table-home">
          <Table {...{ trips }} />
        </div>
      </div>
    </>
  );
}
export default Charts;
