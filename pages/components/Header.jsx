import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import CheckStatus from '../CheckStatus';
import { NextRouter, useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();

  const handleCheckStatus = () => {
    router.push({
      pathname: "/CheckStatus",
    });
  };


    return (
      <div className="header-container">
        <h1 className="header-logo">
          Citizen-centric FIR System Prototype on Blockchain
        </h1>

        <button
          className="button-common hover:bg-green-500"
          onClick={handleCheckStatus}
        >
          check status
        </button>

        <ConnectWallet accentColor="blue" colorMode="light" />
      </div>
    );
}

export default Header