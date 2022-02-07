import React from 'react';

function ErrorMessage({text}) {
  if(!text) {
    return  null;
  }

  return (
    <p className="errorMessage">{text}</p>
  );
}

export default ErrorMessage;