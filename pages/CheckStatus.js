import React from 'react'
import Header from './components/Header'
import Status from './components/Status'

const CheckStatus = () => {
  return (
    <div>
      <Header />
      <div className="md:flex items-center justify-center">
        <Status />
      </div>
    </div>
  );
}

export default CheckStatus
