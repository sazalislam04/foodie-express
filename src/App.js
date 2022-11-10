import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { router } from "./routes/routes";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <span className="h-screen w-full flex items-center justify-center bg-gray-800">
          <PropagateLoader size={26} color="#facc15" />
        </span>
      ) : (
        <>
          <RouterProvider router={router} />
          <Toaster
            toastOptions={{
              style: {
                background: "#fff",
                color: "#222",
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
