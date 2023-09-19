import { getAuth, signOut } from "firebase/auth";

function SignOutButton() {
  return (
    <button
      onClick={() => signOut(getAuth())}
    >
      Signout
    </button>
  );
}

export default SignOutButton;
