import { ExpenseCategory, IncomeCategory } from '@/types';

const INCOME_CATEGORIES: IncomeCategory[] = ['Salary', 'Freelance', 'Side Project Income', 'Other'];

const EXPENSE_CATEGORIES: ExpenseCategory[] = ['Food', 'Transportation', 'Housing', 'Entertainment', 'Other'];

export type ExpenseFilter = 'all' | 'none' | ExpenseCategory;
export function ExpenseSelect({ onSelect }: { onSelect?: (filter: ExpenseFilter) => void }) {
  return (
    <select className="absolute top-5 right-5 w-20" onChange={(e) => onSelect?.(e.target.value as ExpenseFilter)}>
      <option value="all">View All</option>
      {EXPENSE_CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      <option value="none">View None</option>
    </select>
  );
}

export type IncomeFilter = 'all' | 'none' | IncomeCategory;
export function IncomeSelect({ onSelect }: { onSelect?: (filter: IncomeFilter) => void }) {
  return (
    <select className="absolute top-5 right-5 w-20" onChange={(e) => onSelect?.(e.target.value as IncomeFilter)}>
      <option value="all">View All</option>
      {INCOME_CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      <option value="none">View None</option>
    </select>
  );
}
