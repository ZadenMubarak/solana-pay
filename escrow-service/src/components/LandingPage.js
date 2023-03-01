import React from 'react';
import logo from '../logo.svg';
import './LandingPage'
import EscrowProcess from './EscrowProces';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-header">
        <img src={logo} alt="Dapp Logo" className="logo-image" />
        <h1 className="landing-page-title">Welcome to Escrow Service Dapp</h1>
      </div>
      <div className="landing-page-content">
        <p className="landing-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis nisl vel tellus volutpat, in dictum eros rhoncus. Fusce vel neque enim. Donec euismod tortor sed nibh imperdiet, ut interdum nulla placerat.</p>
        <p className="landing-page-text">Suspendisse sodales ipsum vitae nulla fermentum, eget fringilla arcu blandit. Praesent gravida metus at lobortis laoreet. Aliquam eu leo vel felis posuere pellentesque. Vivamus ultrices, nisi vitae luctus luctus, est purus scelerisque velit, nec consequat tellus justo ac lectus.</p>
      </div>
      <EscrowProcess/>
    </div>
  );
}

export default LandingPage;
