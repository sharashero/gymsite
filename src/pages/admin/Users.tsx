import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "../Grid";
import PageLayout from "../PageLayout";
import Input from "../../components/Input";
import UserRole from "../../components/User/UserRole";
import { useUserByRole } from "../../firebase/firestore/users";


function Users() {
  const [search, setSearch] = useState("");
  const users = useUserByRole("trainee");

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return (
        user.name?.match(search) || user.email?.match(search)
      );
    });
  }, [users, search]);

  return (
    <PageLayout title="Users">

      <div className="flex w-full flex-col items-center  justify-center gap-16">
        <Input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <Grid>
          {filteredUsers.map(user => (
            <Link
              key={user.id}
              to={user.id}
            >
              <UserRole {...user} />
            </Link>
          ))}
        </Grid>
      </div>

    </PageLayout>
  );
}


export default Users;
