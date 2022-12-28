export function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatRating(rating: number) {
  return `${Math.round(rating * 100) / 10}/10`;
}