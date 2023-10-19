import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
    return (
      <div className="header-container">
        <h1 className="header-logo">
          Citizen-centric FIR System Prototype on Blockchain
        </h1>
        <ConnectWallet accentColor="blue" colorMode="light" />
      </div>
    );
}

export default Header