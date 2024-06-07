import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Error from "./pages/Error";
import Login from "./AuthPages/Login";
import Register from "./AuthPages/Register";
import OTPpage from "./AuthPages/OTPpage";
import Protected from "./components/Protected";
import PaymentSuccessful from "./pages/PaymentSuccessful";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/pricing" element={<Protected Component={Pricing} />} /> */}
          <Route path="/pricing" element={<Pricing />} />
        </Route>
        <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyotp" element={<OTPpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
