import { ReactNode } from "react";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input/Input";
import {
  TField, TFieldData
} from "../../types/fields";
import { useForm } from "react-hook-form";
import { dateToInput } from "../../util/date";


interface IEditData<T extends TField<string, unknown>> {
  children: ReactNode;
  dataFields: T[];
  data: Partial<TFieldData<T[]>>;
  onEdit(data: Partial<TFieldData<T[]>>): Promise<void>;
}


interface IEditDataComponent<T extends TField<string, unknown>> {
  dataFields: T[];
  data: Partial<TFieldData<T[]>>;
  onEdit(data: Partial<TFieldData<T[]>>): Promise<void>;
  onClose(): void;
}


function EditDataComponent<T extends TField<string, unknown>>({
  data,
  dataFields,
  onEdit,
  onClose,
}: IEditDataComponent<T>)
{
  const values: Record<string, unknown> = {};

  dataFields.filter(
    field => field.type !== undefined
  ).forEach(field => {
    values[field.key] = data[field.key];

    if (values[field.key] === undefined) {
      values[field.key] = field.getDefault();
    }

    if (field.type === "date") {
      values[field.key] = dateToInput(values[field.key] as Date);
    }
  });

  const { register, handleSubmit } = useForm({
    values,
  });

  async function onSubmit(data: unknown) {
    await onEdit(data as TFieldData<T[]>);
    onClose();
  }

  return (
    <div className="flex max-w-md flex-col items-center gap-8 bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold">Edit</h2>

      <form
        className="flex w-full flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-center gap-2">
          {dataFields.filter(
            field => field.type !== undefined
          ).map(field => {
            return (
              <div
                key={field.key}
                className="flex w-full items-center justify-between gap-8"
              >
                <label>
                  {field.name}
                </label>
                <div className="w-1/2">
                  {field.type === "date"
                    ? <Input type={field.type}
                      { ...register(field.key, {
                        required: true,
                        valueAsDate: true,
                      }) } />
                    : field.type === "number"
                      ? <Input type={field.type}
                        { ...register(field.key, {
                          required: true,
                          valueAsNumber: true,
                        }) } />
                      : <Input type={field.type} { ...register(field.key, {
                        required: true
                      })}/>
                  }
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-2">
          <Button
            type="submit"
          >
            Edit
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}


function EditData<T extends TField<string, unknown>>({
  children,
  data,
  dataFields,
  onEdit
}: IEditData<T>)
{
  return (
    <Modal
      renderOpener={open => (
        <Button
          onClick={open}
        >
          {children}
        </Button>
      )}

      renderComponent={close => (
        <EditDataComponent
          data={data}
          dataFields={dataFields}
          onEdit={onEdit}
          onClose={close}
        />
      )}
    />
  );
}


export default EditData;
