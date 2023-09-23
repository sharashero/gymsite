import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./contexts/user";
import { useLoading } from "./contexts/loading";


import Loading from "./layouts/Loading";
const Admin = lazy(() => import("./layouts/Admin"));
const Trainee = lazy(() => import("./layouts/Trainee"));
const LoggedOut = lazy(() => import("./layouts/LoggedOut"));


function App() {
  const user = useUser();
  const loading = useLoading();

  let layout = null;

  if (loading) {
    layout = <Loading />;
  }
  else if (!user) {
    layout = <LoggedOut />;
  }
  else if (user.role === "admin") {
    layout = <Admin />;
  }
  else if (user.role === "trainee") {
    layout = <Trainee />;
  }
  else {
    // TODO add pending layout
    layout = null;
  }

  return (
    <BrowserRouter>
      <Suspense>
        {layout}
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
