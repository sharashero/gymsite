import {
  TField, TFieldData
} from "../../types/fields";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";


interface IDataTable<T extends TField<string, unknown>> {
  dataFields: T[];
  data: Partial<TFieldData<T[]>>;
  onEdit?(data: Partial<TFieldData<T[]>>): Promise<void>;
  onDelete?(): Promise<void>;
}


function DataTable<T extends TField<string, unknown>>({
  data,
  dataFields,
  onEdit,
  onDelete,
}: IDataTable<T>)
{
  return (
    <div className="w-full p-2">
      <div className="w-full overflow-auto">
        <table className={"w-full table-auto"}>
          <tbody className="divide-y-2 ">
            {dataFields.filter(
              field => data[field.key] !== undefined
            )
              .map((field) => {
                return (
                  <tr key={field.key}>
                    <td className="pr-2">{field.name}</td>
                    <td className="float-right">{field.format(data[field.key])}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-2">
        {onEdit && <div className="mt-4">
          <EditData
            data={data}
            dataFields={dataFields}
            onEdit={onEdit}
          >
            <FontAwesomeIcon icon={faPencil} />
          </EditData>
        </div>}

        {onDelete && <div className="mt-4">
          <DeleteData
            onDelete={onDelete}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </DeleteData>
        </div>}
      </div>
    </div>
  );
}


export default DataTable;
