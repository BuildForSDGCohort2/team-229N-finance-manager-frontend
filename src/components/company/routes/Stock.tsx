import React, { FC, useRef } from 'react';
import AccoutTop from '../AccoutTop';
import { CompanyProps } from '../interface';
import { useTypedSelector } from '../../../redux/stateTypes';
import { numberWithCommas } from '../../utils/helpers';
import dayjs from 'dayjs';
import { StockArray } from '../../../redux/interface';
import PrintButton from '../Print';
const Item: FC<StockArray> = ({ item, price, pd, qty, sPrice, sqty }) => {
  return (
    <tr>
      <td>{dayjs(pd).format('DD/MM/YYYY')}</td>
      <td>{item}</td>
      <td className="center">{numberWithCommas(qty)}</td>
      <td className="center">{numberWithCommas(price)}</td>
      <td className="center">{numberWithCommas(sPrice)}</td>
      <td className="center">{numberWithCommas(sqty)}</td>
    </tr>
  );
};
const Stock: FC<{ props: CompanyProps }> = ({ props }) => {
  const { email, location, name } = props;
  const { stock } = useTypedSelector((state) => state.stock);
  let totalQty = 0;
  let sold = 0;
  const componentRef = useRef(null);
  return (
    <>
      <div className="card-panel" ref={componentRef}>
        <AccoutTop
          account="Stock Account"
          name={name}
          email={email}
          location={location}
        />

        <table className="black-text striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th className="center">Quantity</th>
              <th className="center">Unit price (USD)</th>
              <th className="center">Selling Price (USD)</th>
              <th className="center">Sold</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((t) => {
              totalQty += t.qty;
              sold += t.sqty;
              // total += t.price * t.qty;

              return (
                <Item
                  key={t._id}
                  item={t.item}
                  price={t.price}
                  pd={t.pd}
                  qty={t.qty}
                  sPrice={t.sPrice}
                  sqty={t.sqty}
                />
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td> </td>
              <td className="center underline">
                <b>{numberWithCommas(totalQty)}</b>
              </td>
              <td></td>
              <td></td>
              <td className="center underline">
                <b>{numberWithCommas(sold)}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PrintButton componentRef={componentRef} />
    </>
  );
};

export default Stock;
