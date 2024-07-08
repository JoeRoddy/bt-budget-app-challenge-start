export default function StatDetail({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-2xl font-bold">${formatNumberAsCurrency(value)}</h3>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

const formatNumberAsCurrency = (value: number) =>
  new Intl.NumberFormat().format(value);
