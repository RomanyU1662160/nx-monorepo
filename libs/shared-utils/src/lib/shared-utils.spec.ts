import { formatCurrency, formatRating } from './shared-utils';

describe('formatCurrency-tests', () => {
  it('should format the currency', () => {
    const res = formatCurrency(10, 'USD');
    expect(res).toEqual('$10.00');
  });
});

describe('formatRating-tests', () => {
  it('should format the rating', () => {
    const res = formatRating(5);
    expect(res).toEqual('50/10');
  });
}
)