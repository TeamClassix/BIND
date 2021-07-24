// eslint-disable-next-line no-unused-vars
module.exports = ([statusCode, data], req, res, next) => {
  const responseObj = {
    statusCode,
    message: null,
  };

  if ([200, 201].includes(statusCode)) {
    responseObj.message = 'Success';
    responseObj.data = data;
  } else if (statusCode === 400) {
    responseObj.message = 'Bad Request';
  } else if (statusCode === 401) {
    responseObj.message = 'Unauthorized';
  } else if (statusCode === 403) {
    responseObj.message = 'Forbidden';
  } else if (statusCode === 409) {
    responseObj.message = 'Conflict';
  } else if (statusCode === 429) {
    responseObj.message = 'Rate limit exceeded. Too many requests.';
  } else if (statusCode === 500) {
    responseObj.message = 'Internal Server Error';
  } else if (statusCode === 503) {
    responseObj.message = 'Backend Server at Capacity';
  } else {
    // responseObj.statusCode = 520;
    responseObj.statusCode = statusCode;
    responseObj.message = data || 'Some unknown error has occurred. Please contact an administrator to report this issue.';
    responseObj.contact = 'admin@example.com';
  }
  res.status(responseObj.statusCode).json(responseObj);
};
