import React, { useState } from 'react';
import './EscrowContract.css'

function EscrowContract() {
  const [seller, setSeller] = useState('0x1234...5678');
  const [buyer, setBuyer] = useState('0x5678...1234');
  const [amount, setAmount] = useState('1.23');
  const [status, setStatus] = useState('Pending');

  return (
    <div className="escrow-contract-page">
      <h1 className="escrow-contract-page-title">Escrow Contract Details</h1>
      <div className="contract-details">
        <div className="detail-group">
          <div className="detail-label">Seller:</div>
          <div className="detail-value">{seller}</div>
        </div>
        <div className="detail-group">
          <div className="detail-label">Buyer:</div>
          <div className="detail-value">{buyer}</div>
        </div>
        <div className="detail-group">
          <div className="detail-label">Amount:</div>
          <div className="detail-value">{amount}</div>
        </div>
        <div className="detail-group">
          <div className="detail-label">Status:</div>
          <div className={`detail-value status-${status.toLowerCase()}`}>{status}</div>
        </div>
      </div>
    </div>
  );
}

export default EscrowContract;
