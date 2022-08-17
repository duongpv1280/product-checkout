import React from "react";
import './CustomerView.css';

interface CustomerProps {
  name: string,
  onInputChange: (value: any) => void;
}

function CustomerView (props: CustomerProps) {
  const { name, onInputChange } = props;

  return (
    <div className="customer-view">
      <h3 className='title'>Customer Name</h3>
      <input className='input' type='text' onChange={onInputChange} value={name} />
    </div>
  )
}

export default CustomerView;
