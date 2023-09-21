import { ReactNode } from "react";
import Modal from "../Modal";
import Button from "../Button";
import Input from "../Input/Input";
import {
  TField, TFieldData
} from "../../types/fields";
import { useForm } from "react-hook-form";


interface IAddData<T extends TField<string, unknown>> {
  children: ReactNode;
  dataFields: T[];
  onAdd(data: TFieldData<T[]>): Promise<void>;
}


interface IAddDataComponent<T extends TField<string, unknown>> {
  dataFields: T[];
  onAdd(data: TFieldData<T[]>): Promise<void>;
  onClose(): void;
}


function AddDataComponent<T extends TField<string, unknown>>({
  dataFields,
  onAdd,
  onClose,
}: IAddDataComponent<T>)
{
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: unknown) {
    await onAdd(data as TFieldData<T[]>);
    onClose();
  }

  return (
    <div className="flex max-w-md flex-col items-center gap-8 bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold">Add</h2>

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
            Add
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


function AddData<T extends TField<string, unknown>>({
  children,
  dataFields,
  onAdd
}: IAddData<T>)
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
        <AddDataComponent
          dataFields={dataFields}
          onAdd={onAdd}
          onClose={close}
        />
      )}
    />
  );
}


export default AddData;
