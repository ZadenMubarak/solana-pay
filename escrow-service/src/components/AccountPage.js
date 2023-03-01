import React, { useState } from 'react';
import './AccountPage.css'

function AccountPage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('********');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Code to submit account changes to backend API goes here
  };

  return (
    <div className="account-page">
      <div className="account-header">
        <h1 className="account-header-title">Account Information</h1>
        <button className="account-header-button">Log Out</button>
      </div>
      <div className="account-details">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Save Changes</button>
        </form>
      </div>
      <div className="account-transaction-history">
        <h2 className="account-transaction-history-title">Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023-02-20</td>
              <td>Payment to Acme Inc.</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>2023-02-18</td>
              <td>Deposit from Bank of America</td>
              <td>$1,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountPage;
