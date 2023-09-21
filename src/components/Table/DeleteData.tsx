import { FormEvent, ReactNode } from "react";
import Modal from "../Modal";
import Button from "../Button";


interface IDeleteData {
  children: ReactNode;
  onDelete(): Promise<void>;
}


interface IDeleteDataComponent {
  onDelete(): Promise<void>;
  onClose(): void;
}


function DeleteDataComponent({
  onDelete,
  onClose,
}: IDeleteDataComponent)
{
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    await onDelete();
    onClose();
  }

  return (
    <div className="flex max-w-md flex-col items-center gap-8 bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold">Delete</h2>

      <form
        className="flex w-full flex-col items-center justify-center gap-8"
        onSubmit={onSubmit}
      >
        <div className="flex w-full flex-col items-center gap-2">
          Confirm Delete ?
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline-danger"
            type="submit"
          >
            Delete
          </Button>

          <Button
            type="button"
            variant="danger"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}


function DeleteData({
  children,
  onDelete
}: IDeleteData)
{
  return (
    <Modal
      renderOpener={open => (
        <Button
          size="sm"
          onClick={open}
        >
          {children}
        </Button>
      )}

      renderComponent={close => (
        <DeleteDataComponent
          onDelete={onDelete}
          onClose={close}
        />
      )}
    />
  );
}


export default DeleteData;
