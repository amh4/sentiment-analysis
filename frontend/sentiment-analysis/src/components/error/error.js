import React from 'react';

function Error( {errorMessage} ) {
  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  )
}

export default Error;