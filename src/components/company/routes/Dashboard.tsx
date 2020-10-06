import React from 'react';
import { Doughnut, Pie, Line, Bar } from 'react-chartjs-2';
import { useData } from '../../utils/data';
const Dashboard = () => {
  const { pieData, donutdDta, lineData } = useData();
  // const legendOpts = {
  //   display: true,
  //   position: 'bottom',
  //   fullWidth: true,
  //   reverse: false,
  //   // labels: {
  //   //   fontColor: 'rgb(255, 99, 132)',
  //   // },
  // };
  return (
    <>
      <div className="row">
        <div className="col s12 m6">
          <div className="card-panel">
            <Pie
              data={pieData}
              redraw
              //  legend={legendOpts}
            />
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
