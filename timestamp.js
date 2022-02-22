// for this function I didn't want to make a regex or several if's
// this question helped a lot:
// https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
const dateIsValid = (date) => {
  return date instanceof Date && !isNaN(date);
};

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
