import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import {
  updateUser,
  useUserSnapshot,
} from "../../firebase/firestore/users";
import { TDocument } from "../../types/common";
import { dateToInput } from "../../util/date";


interface IUserInfo {
  userId: string;
}


function UserInfo({
  userId
}: IUserInfo)
{
  const user = useUserSnapshot(userId);
  const { register, handleSubmit } = useForm<Required<TDocument>>({
    values: {
      ...user,
      dateOfBirth: user.dateOfBirth ? dateToInput(user.dateOfBirth) : ""
    },
  });

  return (
    <form
      className="mx-auto flex max-w-xs flex-col items-center gap-8 rounded-2xl bg-white p-4 ring ring-neutral-200"
      onSubmit={handleSubmit(updateUser)}
    >
      <div className="h-32 w-32 rounded-full ring-2 ring-neutral-300">
        <img
          className="h-full w-full rounded-full"
          src={user.photoURL}
          alt="profile picture"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="ml-2">
          Email
        </label>
        <Input
          type="email"
          value={user.email}
          disabled
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="ml-2">
          Name
        </label>
        <Input
          type="text"
          placeholder="eg. Mesho El nemr"
          {...register("name")}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="ml-2">
            Date of birth
        </label>
        <Input
          type="date"
          {...register("dateOfBirth", { valueAsDate: true })}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <label className="ml-2">
          Phone number
        </label>
        <Input
          type="text"
          placeholder="eg. 0777 5000"
          {...register("phoneNumber")}
        />
      </div>

      <Button type="submit">
        Save
      </Button>
    </form>
  );
}


export default UserInfo;
