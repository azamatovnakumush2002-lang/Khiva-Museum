import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const routeNames = {
    about: "Muzey haqida",
    gallery: "Galereya",
    news: "Yangiliklar",
    collections: "Kolleksiyalar",
    announcements: "E'lonlar",
    employees: "Xodimlar",
    tickets: "Chipta xarid qilish",
    contact: "Bog'lanish",
    contacts: "Bog'lanish",
};

const Breadcrumb = ({ customTitle }) => {
    const location = useLocation();

    // URL yo'lini bo'laklarga ajratamiz
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Bosh sahifada (Home) ko'rinmasligi uchun
    if (pathnames.length === 0) return null;

    // Joriy sahifa nomini aniqlash
    const currentPath = pathnames[pathnames.length - 1];
    const isId = currentPath.length > 20 || !isNaN(Number(currentPath));
    const pageTitle =
        customTitle ||
        (isId
            ? "Batafsil"
            : routeNames[currentPath.toLowerCase()] || currentPath);

    return (
        <div className='bg-inherit text-white py-5 px-4 sm:px-8 border-b border-text/90'>
            <div>
                {/* Sahifa Sarlavhasi */}
                <h1 className='text-2xl sm:text-3xl font-bold tracking-wide text-text capitalize mb-3'>
                    {pageTitle}
                </h1>

                {/* Navigatsiya Zanjiri */}
                <nav className='flex items-center text-xs sm:text-sm text-text font-medium overflow-x-auto'>
                    {/* Bosh sahifa (Home) linki */}
                    <Link
                        to='/'
                        className='flex items-center gap-1.5 hover:text-amber-400 transition-colors shrink-0'
                    >
                        <Icon icon='lucide:home' className='text-base text-' />
                        <span>Bosh sahifa</span>
                    </Link>

                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        const isUuidOrId =
                            value.length > 20 || !isNaN(Number(value));
                        const displayName = isUuidOrId
                            ? "Batafsil"
                            : routeNames[value.toLowerCase()] || value;

                        return (
                            <div
                                key={to}
                                className='flex items-center shrink-0'
                            >
                                {/* Strelka ikonkasi */}
                                <Icon
                                    icon='lucide:chevron-right'
                                    className='mx-2 text-slate-500 text-sm'
                                />

                                {isLast ? (
                                    <span className='text-white font-semibold capitalize'>
                                        {customTitle || displayName}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className='hover:text-amber-400 transition-colors capitalize'
                                    >
                                        {displayName}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
