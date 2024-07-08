export type IncomeCategory =
  | 'Salary'
  | 'Freelance'
  | 'Side Project Income'
  | 'Other';

export type Income = {
  amount: number;
  name: string;
  date: string;
  category: IncomeCategory;
};

export type ExpenseCategory =
  | 'Food'
  | 'Transportation'
  | 'Housing'
  | 'Entertainment'
  | 'Other';

export type Expense = {
  amount: number;
  name: string;
  date: string;
  category: ExpenseCategory;
};
