import React, { useLayoutEffect } from 'react';
import M from 'materialize-css';
const Fab = () => {
  useLayoutEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large red">
        <i className="large material-icons">apps</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating red">
            <i className="material-icons">insert_chart</i>
          </a>
        </li>
        <li>
          <a className="btn-floating yellow darken-1">
            <i className="material-icons">format_quote</i>
          </a>
        </li>
        <li>
          <a className="btn-floating green">
            <i className="material-icons">publish</i>
          </a>
        </li>
        <li>
          <a className="btn-floating blue">
            <i className="material-icons">attach_file</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Fab;
