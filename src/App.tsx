import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./contexts/user";
import { useLoading } from "./contexts/loading";


import Loading from "./layouts/Loading";


function App() {
  const user = useUser();
  const loading = useLoading();

  let layout = null;

  if (loading) {
    layout = <Loading />;
  }
  else if (!user) {
    layout = null;
  }
  else if (user.role === "admin") {
    layout = null;
  }
  else if (user.role === "trainee") {
    layout = null;
  }
  else {
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
