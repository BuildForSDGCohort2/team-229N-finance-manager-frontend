import React, { FC } from 'react';
import { useTypedSelector } from '../../redux/stateTypes';
import { Link } from 'react-router-dom';

const Company: FC<{ c: any }> = ({ c }) => {
  const { name, desc, _id } = c;
  //   console.log('company', c);
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title center">{name}</span>
          <p>{desc}</p>
        </div>
        <div className="card-action center">
          <Link to={`/company/${_id}`} className="btn-floating orange">
            <i className="material-icons">arrow_forward</i>
          </Link>
          {/* <a href="#!">This is a link</a> */}
        </div>
      </div>
    </div>
  );
};

const Companies = () => {
  const { companies } = useTypedSelector((state) => state.companies);
  // const { companies } = companies;
  // console.log('companies', companies);
  return (
    <>
      {companies.map((c, i) => (
        <Company c={c} key={i} />
      ))}
    </>
  );
};

export default Companies;
