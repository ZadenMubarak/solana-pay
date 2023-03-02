import React, { useState } from 'react';
import './SettingsPage.css';

function SettingsPage({ name, email, phone, country, onUpdate }) {
  const [formName, setFormName] = useState(name);
  const [formEmail, setFormEmail] = useState(email);
  const [formPhone, setFormPhone] = useState(phone);
  const [formCountry, setFormCountry] = useState(country);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUpdate({
      name: formName,
      email: formEmail,
      phone: formPhone,
      country: formCountry,
    });
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="settings-header-title">Account Settings</h1>
        <button className="settings-header-button">Log Out</button>
      </div>
      <div className="settings-form-container">
        <form onSubmit={handleFormSubmit} className="settings-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formPhone}
            onChange={(e) => setFormPhone(e.target.value)}
          />
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formCountry}
            onChange={(e) => setFormCountry(e.target.value)}
          >
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
          </select>
          <button type="submit">Save Changes</button>
        </form>
        <div className="settings-summary">
          <h2 className="settings-summary-title">Account Summary</h2>
          <ul className="settings-summary-list">
            <li>
              <span>Name:</span> {name}
            </li>
            <li>
              <span>Email:</span> {email}
            </li>
            <li>
              <span>Phone:</span> {phone}
            </li>
            <li>
              <span>Country:</span> {country}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
