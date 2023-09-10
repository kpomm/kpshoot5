import React from 'react';
import logo from './pixelLogo.png';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="flex-row">
        <h1>kpshoot5</h1>
        <img id="logo" src={logo} alt="" />
      </div>
      <h2>LVL1: scared (B&W)</h2>
    </div>
  );
}

export default TopBar;
