import React, { useMemo } from 'react';
import { useTable } from 'react-table';

interface UserData {
  name: string;
  email: string;
}

interface UserTableProps {
  userData: UserData[];
  onRemoveUser: (index: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ userData, onRemoveUser }) => {
  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <button
            onClick={() => onRemoveUser(row.index)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        ),
      },
    ],
    [onRemoveUser]
  );

  const tableData = useMemo(() => userData, [userData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: tableData,
  });

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full border border-gray-300">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="border border-gray-300 p-2">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="border border-gray-300 p-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;