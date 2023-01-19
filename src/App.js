import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes/routes";

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
