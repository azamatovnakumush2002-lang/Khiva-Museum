import { Link, NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";

const AdminLayout = () => {
    const getLinkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
            isActive
                ? "bg-[#eab308] text-gray-900 font-bold shadow-lg shadow-[#eab308]/20 translate-x-1"
                : "text-emerald-100 hover:bg-emerald-800/60 hover:text-white hover:translate-x-1"
        }`;

    return (
        <div className='flex min-h-screen bg-slate-50 font-sans'>
            {/* Chap taraffffffffffffffffffffffffffffff */}
            <aside className='w-64 bg-emerald-950 text-white hidden md:flex flex-col shadow-2xl border-r border-emerald-900/50 h-screen sticky top-0 '>
                {/* Logo section - Yuqorida qotib turadi */}
                <header className='flex items-center gap-3 px-6 py-3 border-b border-emerald-800/60 bg-emerald-900/30 shrink-0'>
                    <img
                        src='/header/museum-logo.png'
                        className='h-10 w-10 object-contain ring-2 ring-[#eab308]/50 rounded-lg p-0.5 bg-white/10'
                    />
                    <div>
                        <h1 className='text-lg font-bold tracking-wide text-white'>
                            Khiva Museum
                        </h1>
                        <p className='text-xs text-amber-400 font-medium'>
                            Admin Panel
                        </p>
                    </div>
                </header>

                <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
                    <NavLink to='/admin' end className={getLinkClass}>
                        <Icon
                            icon='lucide:layout-dashboard'
                            className='text-xl'
                        />
                        <span>Bosh menyu</span>
                    </NavLink>

                    <NavLink to='/admin/tickets' className={getLinkClass}>
                        <Icon icon='lucide:ticket' className='text-xl' />
                        <span>Chiptalar</span>
                    </NavLink>

                    <NavLink to='/admin/news' className={getLinkClass}>
                        <Icon icon='lucide:newspaper' className='text-xl' />
                        <span>Yangiliklar</span>
                    </NavLink>

                    <NavLink to='/admin/employees' className={getLinkClass}>
                        <Icon icon='lucide:users' className='text-xl' />
                        <span>Xodimlar</span>
                    </NavLink>

                    <NavLink to='/admin/user-tickets' className={getLinkClass}>
                        <Icon icon='lucide:ticket' className='text-xl' />
                        <span>Foydalanuvchi Chiptalari</span>
                    </NavLink>

                    <NavLink to='/admin/gallery' className={getLinkClass}>
                        <Icon icon='lucide:image' className='text-xl' />
                        <span>Galereya</span>
                    </NavLink>

                    <NavLink to='/admin/announcements' className={getLinkClass}>
                        <Icon icon='lucide:megaphone' className='text-xl' />
                        <span>E`lonlar</span>
                    </NavLink>

                    <NavLink to='/admin/collections' className={getLinkClass}>
                        <Icon icon='lucide:layers' className='text-xl' />
                        <span>Kolleksiyalar</span>
                    </NavLink>

                    <NavLink to='/admin/upload' className={getLinkClass}>
                        <Icon icon='lucide:upload' className='text-xl' />
                        <span>Upload</span>
                    </NavLink>

                    <NavLink to='/admin/admins' className={getLinkClass}>
                        <Icon icon='lucide:shield-check' className='text-xl' />
                        <span>Adminlar</span>
                    </NavLink>

                    <NavLink to='/admin/contacts' className={getLinkClass}>
                        <Icon icon='lucide:contact' className='text-xl' />
                        <span>Kontaktlar</span>
                    </NavLink>
                </nav>
            </aside>

            {/* O'ng taraf  Header */}
            <div className='flex-1 flex flex-col'>
                {/* Header */}
                <header className='p-3.5 bg-white border-b border-slate-200 flex items-center justify-end shadow-sm'>
                    <div className='flex items-center gap-4'>
                        <div className='text-right'>
                            <p className='text-sm font-bold text-slate-800'>
                                Admin
                            </p>
                        </div>
                        <Link
                            to='profile'
                            className='h-10 w-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center shadow-md'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='28'
                                height='28'
                                viewBox='0 0 24 24'
                            >
                                <path d='M0 0h24v24H0z' fill='none' />
                                <g
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-width='1.5'
                                >
                                    <path
                                        stroke-linejoin='round'
                                        d='M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z'
                                    />
                                    <circle cx='12' cy='7' r='3' />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </header>

                <main className='flex-1 p-5 lg:p-8 bg-slate-100/70 overflow-y-auto'>
                    <div className='max-w-7xl mx-auto'>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
