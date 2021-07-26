import React, { useEffect } from 'react';

const errorData = (code) => {
  if (code === 404) {
    return {
      short: 'Page Not Found',
      detailed: 'The resource you requested is not available',
    };
  }
  return {
    short: 'Error',
    detailed: 'Some unknown error has occurred.',
  };
};

const ErrorPage = ({ setErrState, statusCode }) => {
  useEffect(() => () => setErrState({ statusCode: null }));
  const pageTemplate = errorData(statusCode);
  return (
    <>
      <h1>{pageTemplate.short}</h1>
      <div>{pageTemplate.detailed}</div>
    </>
  );
};

export default ErrorPage;
