import { HomePage, Learn,  ErrorPage, Rewards, Settings,LeaderBoard, DashBoard, Ecozones,LoginPage} from "./pages";
import { Navbar } from "./components";

const routes = [
  {
    key: "1",
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    key: "2",
    path: "learn",
    element: <Learn/>,
    errorElement: <ErrorPage />,
  },
  {
    key: "3",
    path: "rewards",
    element: <Rewards />,
    errorElement: <ErrorPage />,
  },
  {
    key: "4",
    path: "settings",
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
  {
    key: "5",
    path: "leader-boards",
    element: <LeaderBoard />,
    errorElement: <ErrorPage/>
  },
  {
    key: "6",
    path: "eco-zones",
    element: <Ecozones />,
    errorElement: <ErrorPage/>
  },
  
  {
    key: "7",
    path: "dash-boards",
    element: <DashBoard />,
    errorElement: <ErrorPage/>
  },
  {
    key: "8",
    path: "login",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },


];

export default routes;