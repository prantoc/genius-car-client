import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router/Router";

function App() {
  return (
    <div className="max-w-7xl mx-auto" data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
