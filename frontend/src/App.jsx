import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./compoents/Login";
import SignUp from "./compoents/SignUp";
import Pricing from "./pages/Pricing";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
