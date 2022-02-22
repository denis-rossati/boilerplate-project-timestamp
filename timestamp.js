const dateIsValid = (date) => new Date(date).toString() !== 'Invalid Date';

const isUnixTime = (timestamp) => {
  try {
    const date = new Date(timestamp * 1000).toISOString().slice(0, 10);
    return dateIsValid(date);
  } catch {
    return false;
  }
};

const convertTimestamp = (timestamp) => {
  if (isUnixTime(timestamp)) {
    const unix = new Date(timestamp * 1000).getTime() / 1000;
    const utc = new Date(Number(timestamp)).toUTCString();
    return {
      unix,
      utc,
    };
  }
  return null;
};

module.exports = {
  isUnixTime,
  convertTimestamp,
  dateIsValid,
};
