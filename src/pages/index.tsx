import Card from '@/components/Card';
import DataTable from '@/components/DataTable';
import { PieWithLegend } from '@/components/PieCharts';
import { ExpenseSelect, IncomeSelect } from '@/components/Select';
import StatDetail from '@/components/StatDetail';

export default function Page() {
  const expenses = [];
  const income = [];

  return (
    <div className="lg:mx-20">
      <p className="text-2xl font-bold mt-3">budget.ly</p>
      <div className="grid grid-cols-3 gap-12 mt-10">
        <Card heading="Overview">
          <div className="">
            <StatDetail label="Example Stat" value={24} />
          </div>
        </Card>
        <Card heading="Expenses">
          <ExpenseSelect />
          <PieWithLegend
            data={{
              Entertainment: 0,
              Food: 1,
              Housing: 0,
              Transportation: 0,
              Other: 0,
            }}
          />
        </Card>
        <Card heading="Income">
          <IncomeSelect />
          <PieWithLegend
            data={{
              Salary: 1,
              Freelance: 0,
              'Side Project Income': 0,
              Other: 0,
            }}
          />
        </Card>
      </div>

      <div className="my-12">
        <DataTable
          data={[
            {
              name: 'John Doe',
              age: 30,
              email: 'johndoe@example.com',
              occupation: 'Software Engineer',
            },
            {
              name: 'Jane Smith',
              age: 28,
              email: 'janesmith@example.com',
              occupation: 'Product Manager',
            },
            {
              name: 'Mike Johnson',
              age: 35,
              email: 'mikejohnson@example.com',
              occupation: 'Data Analyst',
            },
          ]}
        />
      </div>
    </div>
  );
}
