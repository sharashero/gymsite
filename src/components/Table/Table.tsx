import {
  TField,
  TFieldData,
} from "../../types/fields/fields";


interface ITable {
  data: TFieldData<ITable["fields"]>[];
  fields: TField<string, unknown>[];
}


function Table({
  data,
  fields,
}: ITable)
{
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          {fields.map(field => (
            <th key={field.key} className="border-neutral-600 text-start">{field.name}</th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-neutral-300">
        {data.map(item => {
          return (
            <tr key={item.id}>
              {fields.map(
                field => {
                  return (
                    <td key={field.key}>
                      {field.format(item[field.key])}
                    </td>
                  );
                }
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


export default Table;
