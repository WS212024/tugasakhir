import Navbar from "./components/Navbar";
import "./App.css";
import Grafik from "./components/Grafik";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import Main from "./pages/Main";
import Suhu from "./pages/Suhu";
import Kelembaban from "./pages/Kelembaban";
import Hujan from "./pages/Hujan";
import Kecepatan from "./pages/Ketinggian";
import Uv from "./pages/Uv";
import Pressure from "./pages/Pressure";
import Ldr from "./pages/Ldr";

function App() {
  
  const Layout = () => {
    return (
      <div className="h-screen bg-gray-200 overflow-hidden ">
      <Navbar />
      <div className="flex h-full  ">
        {/* bagian kiri */}
        <div className="w-64 bg-[#fffcf7] px-5 h-full border-r-2 border-solid  border-[#b3d6f9] overflow-auto">
          <Menu />
        </div>
        {/* bagian kanan */}
        <div className="py-2 px-5 w-full h-full flex flex-col gap-5 ">
          <Outlet />
        </div>
      </div>
    </div>
    
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/suhu",
          element: <Suhu />
        },
        {
          path: "/Kecepatan",
          element: <Kecepatan />
        },
        {
          path: "/kelembaban",
          element: <Kelembaban />
        },
        {
          path: "/hujan",
          element: <Hujan />
        },
        {
          path: "/uv",
          element: <Uv />
        },
        {
          path: "/pressure",
          element: <Pressure />
        },
        {
          path: "/ldr",
          element: <Ldr />
        },
      ]
    }
  ]);
  
  return ( <RouterProvider router={router} /> );
}

export default App;
