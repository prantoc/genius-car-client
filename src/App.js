import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Triangle } from "react-loader-spinner";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./contexts/AuthProvider/AuthProvider";
import { router } from "./Router/Router/Router";

function App() {
  const { loading, setLoading } = useContext(AuthContext)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [setLoading])




  return (
    <div className="max-w-7xl mx-auto" >
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      {
        loading ?
          <Triangle
            color="#ff3811"
            ariaLabel="triangle-loading"
            wrapperStyle={{ position: 'fixed', top: '50%', left: '50%' }}
            wrapperClassName=""
            visible={true}
          />
          :
          <RouterProvider router={router} />
      }

    </div>
  );
}

export default App;
