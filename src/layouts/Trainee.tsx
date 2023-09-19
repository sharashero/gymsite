import { Outlet, useRoutes } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";


const links = [
  { name:"Information", link: "/info" },
  { name:"Sessions", link: "/sessions" },
  { name:"Payments", link: "/payments" },
];


const navLinks = [
  { link: "/", icon: faHome, },
  { link: "/cycles", icon: faDumbbell, },
  { link: "/stats", icon: faChartSimple, },
];


const routes = [{
  element: <BaseLayout />,
  children: [
    { path: "/", element: <div>Events</div> },
    { path:"/info", element: <div>Info</div> },
    { path:"/stats", element: <div>Stats</div> },
    { path:"/payments", element: <div>Payments</div> },
    { path:"/sessions", element: <div>Sessions</div> },
    {
      path: "cycles", element: <Outlet />, children: [
        { index: true, element: <div>Cycles</div> },
        { path:":cycleId", element:<Outlet />, children: [
          { index: true, element: <div>Trainings</div> },
          { path: ":trainingId", element: <div>Workouts</div> },
        ] },
      ],
    },
  ]
}];


function BaseLayout() {
  return (
    <>
      <div className="fixed right-4 top-6 z-10">
        <Dropdown links={links} />
      </div>

      <div className="mb-16">
        <Outlet />
      </div>

      <div className="fixed bottom-2 z-10 flex w-full items-center justify-center gap-4">
        <Navbar links={navLinks} />
      </div>
    </>
  );
}


function TraineeLayout() {
  return useRoutes(routes);
}


export default TraineeLayout;
