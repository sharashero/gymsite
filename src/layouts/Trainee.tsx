import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";


const Cycles = lazy(() => import("../pages/trainee/Cycles"));
const Events = lazy(() => import("../pages/trainee/Events"));
const Payments = lazy(() => import("../pages/trainee/Payments"));
const Personal = lazy(() => import("../pages/trainee/Personal"));
const Trainings = lazy(() => import("../pages/trainee/Trainings"));
const Workouts = lazy(() => import("../pages/trainee/Workouts"));
const Subscriptions = lazy(() => import("../pages/trainee/Subscriptions"));
const InbodyReadings = lazy(() => import("../pages/trainee/InbodyReadings"));


const links = [
  { name:"Information", link: "/info" },
  { name:"Subscriptions", link: "/subs" },
  { name:"Payments", link: "/payments" },
];


const navLinks = [
  { link: "/", icon: faHome, },
  { link: "/cycles", icon: faDumbbell, },
  { link: "/readings", icon: faChartSimple, },
];


const routes = [{
  element: <BaseLayout />,
  children: [
    { path: "/", element: <Events /> },
    { path:"/info", element: <Personal /> },
    { path:"/readings", element: <InbodyReadings /> },
    { path:"/payments", element: <Payments /> },
    { path:"/subs", element: <Subscriptions /> },
    {
      path: "cycles", element: <Outlet />, children: [
        { index: true, element: <Cycles /> },
        { path:":cycleId", element:<Outlet />, children: [
          { index: true, element: <Trainings /> },
          { path: ":trainingId", element: <Workouts /> },
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

      <div className="mb-24">
        <Outlet />
      </div>

      <div className="fixed bottom-2 z-10 flex w-full items-center justify-center gap-4">
        <Navbar links={navLinks} />
      </div>
    </>
  );
}


function Trainee() {
  return useRoutes(routes);
}


export default Trainee;
