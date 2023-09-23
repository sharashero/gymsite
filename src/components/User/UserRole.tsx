import { useState, FormEvent } from "react";
import Button from "../Button";
import { TUserUpdate } from "../../types/user";


interface IUserRole extends TUserUpdate {
  onSubmit?(userId: string, role: string): Promise<void>;
}


function UserRole({
  id,
  name,
  role,
  email,
  photoURL,
  onSubmit,
}: IUserRole)
{
  const [value, setValue] = useState(role || "");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (onSubmit) {
      await onSubmit(id, value);
    }
  }

  return (
    <div className="w-full min-w-[240px] overflow-hidden rounded-xl border-2 border-neutral-400 bg-white p-4 shadow-lg">
      <form
        className="flex w-full flex-col items-center gap-8"
        onSubmit={handleSubmit}
      >
        <div className="h-32 w-32 rounded-full ring-2 ring-neutral-300">
          <img
            className="h-full w-full rounded-full"
            src={photoURL}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="text-center">
          <h2 className="font-bold">{name}</h2>
          <h3 className="text-sm">{email}</h3>
        </div>

        {onSubmit && <div className="flex flex-col items-center gap-2">
          <select
            className="border p-2"
            value={value}
            onChange={e => setValue(e.target.value)}
          >
            <option value="trainee">Trainee</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
            <option value="rejected">Rejected</option>
          </select>

          <div>
            {value === role ? "-" : "Save to confirm"}
          </div>
        </div>}


        {onSubmit && <Button type="submit">
            Save
        </Button>}
      </form>
    </div>
  );
}

export default UserRole;
