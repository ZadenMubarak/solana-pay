import React from 'react';
import './EscrowProces.css'

function EscrowProcess() {
  return (
    <div className="escrow-process-page">
      <h1 className="escrow-process-page-title">Escrow Process</h1>
      <ol className="process-steps">
        <li className="process-step">
          <div className="step-number">1</div>
          <div className="step-description">Seller and buyer agree to terms</div>
        </li>
        <li className="process-step">
          <div className="step-number">2</div>
          <div className="step-description">Buyer sends payment to escrow service</div>
        </li>
        <li className="process-step">
          <div className="step-number">3</div>
          <div className="step-description">Escrow service verifies payment</div>
        </li>
        <li className="process-step">
          <div className="step-number">4</div>
          <div className="step-description">Seller ships item to buyer</div>
        </li>
        <li className="process-step">
          <div className="step-number">5</div>
          <div className="step-description">Buyer inspects item and approves release of payment</div>
        </li>
        <li className="process-step">
          <div className="step-number">6</div>
          <div className="step-description">Escrow service releases payment to seller</div>
        </li>
      </ol>
    </div>
  );
}

export default EscrowProcess;
