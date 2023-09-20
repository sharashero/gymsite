import PageLayout from "../PageLayout";
import UserInfo from "../../components/User/UserInfo";
import { useUser } from "../../contexts/user";


function Personal() {
  const { uid } = useUser();

  return (
    <PageLayout title="Personal">
      <UserInfo userId={uid}/>
    </PageLayout>
  );
}


export default Personal;
