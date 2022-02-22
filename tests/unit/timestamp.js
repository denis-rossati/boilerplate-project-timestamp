const { describe, it } = require('mocha');
const assert = require('assert');

const {
  isUnixTime,
  convertTimestamp,
  dateIsValid,
} = require('../../timestamp');

describe('isUnixTime', () => {
  it('should return true when a valid unix time is passed as argument', () => {
    assert.strictEqual(isUnixTime('1451001600000'), true);
  });

  it('should return false when something else is passed', () => {
    assert.strictEqual(isUnixTime('something else'), false);
  });
});

describe('dateIsValid', () => {
  it('should return true when a valid date is passed as argument', () => {
    assert.strictEqual(dateIsValid('2015-12-25'), true);
  });

  it('should return false when something else is passed', () => {
    assert.strictEqual(dateIsValid('something else'), false);
  });
});

describe('convertTimestamp', () => {
  const expectedResult = {
    unix: 1451001600000,
    utc: 'Fri, 25 Dec 2015 00:00:00 GMT',
  };

  describe('with unix time', () => {
    it('should return the expected result when the input is valid', () => {
      assert.strictEqual(convertTimestamp('1451001600000'), expectedResult);
    });
  });

  describe('with dates', () => {
    it('should return the expected result when the input is valid', () => {
      assert.strictEqual(convertTimestamp('2015-12-25'), expectedResult);
    });
  });

  it('should return null when the input is invalid', () => {
    assert.strictEqual(convertTimestamp('foo'), null);
  });
});
