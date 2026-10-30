import { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout/layout";
import HomePage from "./pages/home/homePage";
import News from "./pages/news/newsPage";
import TicketsPage from "./pages/tickets/tickets";

import AdminLayout from "./layout/adminLayout";
import AdminTickets from "./pages/admin/adminTickets";
import AdminCollections from "./pages/admin/Collections";
import AdminNews from "./pages/admin/News";
import AdminEmployees from "./pages/admin/Employees";
import Dashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminGallery from "./pages/admin/Gallery";
import UserTickets from "./pages/admin/UserTickets";
import AdminAnnouncements from "./pages/admin/Announcements";
import AdminContacts from "./pages/admin/Contacts";
import Admins from "./pages/admin/Admins";
import AdminUpload from "./pages/admin/Upload";
import ProtectedRoute from "./components/protection/ProtectedRoute";
import Register from "./pages/admin/Register";
import VerifyOtp from "./pages/admin/VerifyOTP";
import AdminLogin from "./pages/admin/Login";
import AboutMuseumPage from "./pages/aboutUs/aboutMuseum";
import Profile from "./pages/admin/Profile";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='about-museum' element={<AboutMuseumPage />} />
                <Route path='news' element={<News />} />
                <Route path='tickets' element={<TicketsPage />} />
            </Route>

            <Route path='/login' element={<AdminLogin />} />
            <Route path='/register' element={<Register />} />
            <Route path='/verify-otp' element={<VerifyOtp />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='tickets' element={<AdminTickets />} />
                    <Route path='news' element={<AdminNews />} />
                    <Route path='employees' element={<AdminEmployees />} />
                    <Route path='collections' element={<AdminCollections />} />
                    <Route path='users' element={<AdminUsers />} />
                    <Route path='gallery' element={<AdminGallery />} />
                    <Route path='user-tickets' element={<UserTickets />} />
                    <Route
                        path='announcements'
                        element={<AdminAnnouncements />}
                    />
                    <Route path='contacts' element={<AdminContacts />} />
                    <Route path='admins' element={<Admins />} />
                    <Route path='upload' element={<AdminUpload />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
