import React from 'react';
import { Doughnut, Pie, Line } from 'react-chartjs-2';
import { pieData, donutdDta, lineData } from '../../utils/data';
const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card-panel">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card-panel">
            <Doughnut data={donutdDta} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="card-panel">
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
