import { useAccountBalance } from './hooks';
// import dayjs from 'dayjs';
// import { useTypedSelector } from '../../redux/stateTypes';

export const useData = () => {
  // const { sales } = useTypedSelector((state) => state.sales);
  const {
    cashBal,
    bankBal,
    totalCapital,
    salesBal,
    purchases,
    stockValue,
  } = useAccountBalance();

  const pieData = {
    labels: ['Capital', 'Cash', 'Bank'],
    datasets: [
      {
        data: [totalCapital, cashBal, bankBal],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['magenta', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const donutdDta = {
    labels: ['Sales', 'Purchase', 'Available stock value'],
    datasets: [
      {
        data: [salesBal, purchases, stockValue],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['teal', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const monthstr =
    'January February March April May June July August September October November December';
  const months = monthstr.split(' ');
  // fill(mA, 24);
  // let i = 0;
  // let x: any;
  // let month;
  // let d;
  // let n;
  // for (i = 0; i < months.length; i++) {
  //   for (x = 0; i < sales.length; i++) {
  //     d = new Date(x.pd);
  //     n = d.getMonth();
  //     // month = months[x];

  //     console.log('my date', months[x]);
  //   }
  //   month = months[x];
  //   console.log('my date', month);
  //   // if (n) {
  //   //   mA.push(month, 200);
  //   // } else {
  //   //   mA.push(month, 0);
  //   // }
  // }
  // console.log('my array', mA);

  const lineData = {
    labels: months,
    datasets: [
      {
        label: 'Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'orangered',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, salesBal, 0, 0],
      },
    ],
  };
  return { pieData, donutdDta, lineData };
};
