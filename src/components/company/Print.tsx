import React, { FC } from 'react';
import { useReactToPrint } from 'react-to-print';
interface Props {
  componentRef: React.MutableRefObject<null>;
}
const PrintButton: FC<Props> = ({ componentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef!.current,
  });
  return (
    <button
      className="btn-flat right waves-effect waves-teal shadow"
      onClick={handlePrint}>
      <b>print</b>
      <i className="material-icons right">print</i>
    </button>
  );
};

export default PrintButton;
