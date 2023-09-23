import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Grid from "../Grid";
import PageLayout from "../PageLayout";
import Input from "../../components/Input";
import UserRole from "../../components/User/UserRole";
import { useUserByRole } from "../../firebase/firestore/users";


function AllUsers() {
  const [search, setSearch] = useState("");
  const [urlSearchParams] = useSearchParams();
  const role = new URLSearchParams(urlSearchParams).get("role") || "";
  const users = useUserByRole(role);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return (
        user.name?.match(search) || user.email?.match(search)
      );
    });
  }, [users, search]);

  async function handleRoleChange(userId: string, role: string) {
    // todo call firebase setRole
    return console.log(userId, role);
  }

  return (
    <PageLayout title={(role || "all") + " users"}>

      <div className="flex w-full flex-col items-center  justify-center gap-16">
        <Input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <Grid>
          {filteredUsers.map(user => (
            <UserRole
              key={user.id}
              {...user}
              onSubmit={handleRoleChange}
            />
          ))}
        </Grid>
      </div>
    </PageLayout>
  );
}


export default AllUsers;
