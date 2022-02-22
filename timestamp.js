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

};

module.exports = {
  isUnixTime,
  convertTimestamp,
  dateIsValid,
};
