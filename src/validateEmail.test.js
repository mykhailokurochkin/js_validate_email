'use strict';

describe(`Function 'validateEmail':`, () => {
  const validateEmail = require('./validateEmail');

  it(`should be declared`, () => {
    expect(validateEmail).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof validateEmail('test838@gmail.com')).toBe('boolean');
  });

  it(`should return 'true' for the valid email`, () => {
    expect(validateEmail('test838@gmail.com'))
      .toBeTruthy();
  });

  it(`should return 'false' for email with not allowed char`, () => {
    expect(validateEmail('test!838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for email with double dots`, () => {
    expect(validateEmail('test..838@gmail.com')).toBe(false);
  });

  it(`should return 'false' if email starts with '.'`, () => {
    expect(validateEmail('.test838@gmail.com')).toBe(false);
  });

  it(`should return 'false' for emails without '@'`, () => {
    expect(validateEmail('test838gmail.com')).toBe(false);
  });
});
