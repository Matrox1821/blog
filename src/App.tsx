import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import FetchTuto from "./pages/FetchTuto";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/fetch-tuto",
    element: (
      <Layout>
        <FetchTuto />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
