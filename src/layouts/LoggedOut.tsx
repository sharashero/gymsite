import { useState } from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import Button from "../components/Button";
import PageLayout from "../pages/PageLayout";


function LoggedOut() {
  const [inProgress, setInprogress] = useState(false);


  async function handleSignIn() {
    setInprogress(true);

    const provider = new GoogleAuthProvider();
    await signInWithRedirect(getAuth(), provider);
  }

  return (
    <PageLayout title="Gymsite">
      <div className="fixed inset-0 flex items-center justify-center">
        <Button
          size="lg"
          onClick={handleSignIn}
          disabled={inProgress}
        >
          <FontAwesomeIcon
            className="text-inherit"
            icon={faGoogle}
            size="lg"
          />
          Continue with Google
        </Button>
      </div>
    </PageLayout>
  );
}


export default LoggedOut;
