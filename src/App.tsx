import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "../src/styles/main.css";

import Navbar from "./conponents/NavBar/Navbar.tsx";
import Footer from "./conponents/footer/footer.tsx";
import Header from "./conponents/header/header.tsx";
import Contact from "./page/contact.tsx";
import KaspiQR from "../src/conponents/kaspiqr.tsx";
// import Sale from "./page/sale.tsx";
import Courses from "./page/Courses.tsx";
import Acccount from "./page/acccount.tsx";
import AddNews from "./conponents/forms/AddNews.tsx";
import Newses from "./page/newses.tsx";
import AdminOrders from "./page/AdminOrders.tsx";

import AuthForm from "./conponents/forms/AuthForm.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./conponents/routes/PrivateRoute.tsx";
import AdminAuthForm from "./conponents/forms/AdminAuthForm.tsx";
import AdminPanel from "./conponents/adminSystems/dashboard/adminPanel.tsx";
import AdminRoute from "./conponents/routes/AdminRoute.tsx";
import UsersList from "./conponents/adminSystems/users/usersList.tsx";
import UserProfile from "./conponents/adminSystems/users/usersProfile.tsx";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sale" element={<Courses />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Acccount />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<AuthForm type="signin" />} />
        <Route path="/register" element={<AuthForm type="signup" />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/news/:id" element={<Newses />} />
        <Route path="/kaspiqr" element={<KaspiQR orderId="test123" />} />
        <Route path="/adminlogin" element={<AdminAuthForm />} />
        <Route
          path="/admin-panel"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
        <Route path="/orders" element={<AdminOrders />} />
        <Route path="/user-list" element={<UsersList />} />
        <Route path="/user-list/:id" element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
