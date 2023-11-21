import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import "./global.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
