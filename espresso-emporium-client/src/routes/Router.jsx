import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Users from "../pages/Users";
import UpdateUser from "../pages/UpdateUser";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      // Coffees
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      // Users
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users,
      },
      {
        path: "/updateUser/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        element: (
          <PrivateRouter>
            <UpdateUser></UpdateUser>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/registration",
        Component: Registration,
      },
    ],
  },
]);

export default router;
