import React from 'react';
import Table from './Table';
import Chart from 'react-google-charts';

function Charts({ data, cash, billed, trips }) {
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
  return (
    <>
      <div className="flex chart flex-space-evenly">
        <Chart
          chartType="PieChart"
          height="20em"
          width="20em"
          data={data}
          options={options}
        />
        <Chart
          chartType="PieChart"
          height="20em"
          width="20em"
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
      <div className="table-wrapper">
        <div>
          <Table {...{ trips }} />
        </div>
      </div>
    </>
  );
}
export default Charts;
