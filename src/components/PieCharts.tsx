import { ExpenseCategory, IncomeCategory } from '@/types';
import { PieChart } from 'react-minimal-pie-chart';

export function PieWithLegend({
  data,
}: {
  data: Record<ExpenseCategory, number> | Record<IncomeCategory, number>;
}) {
  const arrayData = Object.entries(data).map(([category, amount]) => ({
    category,
    value: amount,
    color: COLORS[category as ExpenseCategory | IncomeCategory],
  }));

  return (
    <div className="h-48 grid items-center gap-3 grid-cols-3">
      <div className="col-span-1"></div>
      <PieChart data={arrayData} />
      <div className="flex flex-col">
        {arrayData.map((c) => (
          <div key={c.category} className="flex gap-1 items-center">
            <div
              className="size-4 rounded-full"
              style={{ backgroundColor: c.color }}
            />
            {c.category}
          </div>
        ))}
      </div>
    </div>
  );
}

const COLORS: Record<ExpenseCategory | IncomeCategory, string> = {
  Entertainment: '#FF5722',
  Food: '#4CAF50',
  Housing: '#2196F3',
  Transportation: '#FFC107',
  'Side Project Income': '#FFC107',
  Freelance: '#4CAF50',
  Salary: '#2196F3',
  Other: '#808080',
};
