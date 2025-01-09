import { faker } from '@faker-js/faker';

export function createRandomTransaction() {
  return {
    id: faker.string.uuid(),
    company: faker.company.name(), // before version 9.1.0, use userName()
    iban: faker.finance.iban(),
    bic: faker.finance.bic(),
    currency: faker.finance.currencyCode(),
    amount: faker.finance.amount(),
    date: faker.date.between({ from: '2025-01-01', to: '2025-12-31' }).toISOString().split('T')[0],
  };
}

export const transactions = faker.helpers.multiple(createRandomTransaction, {
  count: 500,
});