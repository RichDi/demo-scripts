import sum from '../index.js';
import assert from 'assert';

describe('sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(1, 2), 3);
  });
  it('should handle negative numbers', () => {
    assert.equal(sum(-3, -5), -8);
  });
  it('should handle decimals', () => {
    assert.equal(sum(0.3, 0.7), 1);
  });
  it('should handle zero', () => {
    assert.equal(sum(0, 0), 0);
  });
});