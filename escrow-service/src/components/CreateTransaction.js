import React, { useState } from 'react';
import './CreateTransaction.css'

function CreateTransaction() {
  const [seller, setSeller] = useState('');
  const [buyer, setBuyer] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Seller: ${seller}, Buyer: ${buyer}, Amount: ${amount}`);
    // Add logic here to create the transaction using the Escrow Service Dapp's smart contract
  };

  return (
    <div className="create-transaction-page">
      <h1 className="create-transaction-page-title">Create New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="seller">Seller:</label>
          <input type="text" id="seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="buyer">Buyer:</label>
          <input type="text" id="buyer" value={buyer} onChange={(e) => setBuyer(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Create Transaction</button>
      </form>
    </div>
  );
}

export default CreateTransaction;
