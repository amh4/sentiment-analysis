import React from 'react';
import './error.css';

function Error( {errorMessage} ) {
  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  )
}

export default Error;