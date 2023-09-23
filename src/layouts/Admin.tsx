import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faWallet } from "@fortawesome/free-solid-svg-icons/faWallet";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";

import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";


const User = lazy(() => import("../pages/admin/User"));
const Money = lazy(() => import("../pages/admin/Money"));
const Users = lazy(() => import("../pages/admin/Users"));
const Cycles = lazy(() => import("../pages/admin/Cycles"));
const Events = lazy(() => import("../pages/admin/Events"));
const AllUsers = lazy(() => import("../pages/admin/AllUsers"));
const Workouts = lazy(() => import("../pages/admin/Workouts"));
const Trainings = lazy(() => import("../pages/admin/Trainings"));
const WorkoutDatabase = lazy(() => import("../pages/admin/WorkoutDatabase"));


const links = [
  { name:"All users", link: "/all-users" },
  { name:"Pending users", link: "/all-users?role=pending" },
  { name:"Expired users", link: "/all-users?role=expired" },
  { name:"Rejected users", link: "/all-users?role=rejected" },
];


const navLinks = [
  { link: "/", icon:faHome },
  { link: "/users", icon: faUsers },
  { link: "/database", icon:faDatabase },
  { link: "/money", icon:faWallet, },
];


const routes = [{
  element: <BaseLayout />,
  children: [
    { path: "/", element: <Events /> },
    { path: "/money", element: <Money /> },
    { path: "/all-users", element: <AllUsers /> },
    { path: "/database", element: <WorkoutDatabase /> },
    { path: "/users", element: <Outlet />, children: [
      { index: true, element: <Users /> },
      { path:":userId", element:<Outlet />, children: [
        { index: true, element: <User /> },
        { path: "cycles", element: <Outlet />, children: [
          { index: true, element: <Cycles /> },
          { path:":cycleId", element:<Outlet />, children: [
            { index: true, element: <Trainings /> },
            { path: ":trainingId", element: <Workouts /> },
          ] },
        ] },
      ] },
    ] },
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


function Admin() {
  return useRoutes(routes);
}


export default Admin;
