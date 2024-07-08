interface Props<T> {
  data: T[];
}

const DataTable = <T,>({ data }: Props<T>): JSX.Element => {
  const headers = data.length > 0 ? Object.keys(data?.at(0) || {}) : [];

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className="px-4 py-2 border border-gray-300 bg-gray-50"
            >
              {header.charAt(0)?.toUpperCase()}
              {header.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header) => (
              <td key={header} className="px-4 py-2 border border-gray-300">
                {(item as any)[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
