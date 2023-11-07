import { Login } from "./components/Login";
import { Account } from "./components/Account";
import { Home } from "./components/Home";
import { Registreren } from "./components/Registreren";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
      path: '/account',
      element: <Account />
    },
    {
        path: '/registreren',
        element: <Registreren />
    }
];

export default AppRoutes;
