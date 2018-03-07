'use strict';

const convert = require('..');
const Big = require('big.js');


test('should default to returning a Number', () => {

  expect(convert(2, 'BTC', 'BTC')).toBe(2);
});

test('should return a Number', () => {

  expect(convert(2, 'BTC', 'BTC', 'Number')).toBe(Number(2));
});

test('should return a Big number', () => {
 
  expect(convert(2, 'BTC', 'BTC', 'Big')).toEqual(Big(2));
});

test('should return a String', () => {
 
  expect(convert(2100, 'mBTC', 'BTC', 'String')).toBe("2.1");
});

test('should convert an integer', () => {
  
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe(1234567.89012345);
});

test('should convert a number', () => {
 
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe(Number(123456789012345));
});

test('should convert a string', () => {

  expect(convert('2', 'BTC', 'BTC', 'Number')).toBe(Number(2));
});

test('should convert a Big number', () => {
 
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe(Number(2));
});

test('should convert a NaN to a Number', () => {
 
  expect(convert(NaN, 'BTC', 'BTC', 'Number')).toBe(Number(NaN));
  expect(convert(NaN, 'BTC', 'mBTC', 'Number')).toBe(Number(NaN));
});

test('should convert a NaN to a String', () => {
  
  expect(convert(NaN, 'BTC', 'BTC', 'String')).toBe("NaN");
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).toBe("NaN");
});

test('should not convert a NaN to a Big', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'Big')).toThrow(BigError);
});

test('should handle rounding errors', () => {
  expect(convert(2100, 'mBTC', 'BTC', 'String')).toBe("2.1");
});

test('should throw when untest is undefined', () => {

  expect(convert(2100, 'mBTC', 'BTC', 'String')).toBe("2.1");
});

test('should throw when representaion is undefined', () => {
 
  expect(convert(2100, 'mBTC', 'BTC', 'String')).toBe("2.1");
});

test('should allow untest aliases', () => {

  expect(convert(2100, 'mBTC', 'BTC', 'String')).toBe("2.1");
});
