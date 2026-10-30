import { useTranslation } from "react-i18next";
import {
    AdminButton,
    BurgerButton,
    DarkLigthButton,
    LanguageButton,
    TicketButton,
} from "../buttons/buttons";
import { useEffect, useState } from "react";
import Icons from "../icons/Icons";
import { Link } from "react-router-dom";
import Drawer from "./drawer";

const Header = () => {
    const { t } = useTranslation();
    const [aboutOpen, setAboutOpen] = useState(false);
    const [newsOpen, setNewsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 130);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className='relative bg-[#f8daa2] dark:bg-primary'>
            <section className='mx-auto flex max-w-300 items-center justify-between gap-4 px-5'>
                <div className='items-center gap-5 flex'>
                    <Link to='/' className=''>
                        <img
                            src='/header/museum-logo.png'
                            className='h-16 w-16 object-cover'
                        />
                    </Link>
                    <div className='hidden lg:flex h-12 w-px bg-hLight dark:bg-text/70'></div>
                    <Link
                        className='hidden group  lg:flex items-center gap-2 text-sm text-hLight  dark:text-[#e8c77e] transition duration-300 hover:text-[#432a03] dark:hover:text-white'
                        to='https://khiva360.nazzar.uz/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='transition duration-300 group-hover:scale-110'>
                            {Icons.nazzar}
                        </span>
                        Khiva 360°
                    </Link>
                    <Link
                        to=''
                        className='hidden lg:flex border-l border-hLight dark:border-text pl-5 text-sm text-hLight  dark:text-[#e8c77e] transition duration-300 hover:text-[#432a03] dark:hover:text-white'
                    >
                        {t("header.museumShop")}
                    </Link>
                </div>
                <div className='ml-auto flex flex-wrap items-center justify-end gap-4'>
                    <div className='max-[449px]:hidden min-[450px]:flex items-center gap-3'>
                        <Link
                            to=''
                            aria-label='YouTube'
                            className='transition duration-300 hover:-translate-y-1'
                        >
                            {Icons.youTube}
                        </Link>
                        <Link
                            to=''
                            aria-label='Instagram'
                            className='transition-all duration-300 hover:-translate-y-1 hover:text-[#fff0c5]'
                        >
                            {Icons.instagram}
                        </Link>
                        <Link
                            to=''
                            aria-label='Email'
                            className='transition-all duration-300 hover:-translate-y-1 hover:text-[#fff0c5]'
                        >
                            {Icons.email}
                        </Link>
                    </div>
                    <Link
                        to='tel:+998556046343'
                        className='hidden lg:flex items-center gap-2 rounded-full border border-hLight dark:border-text/70 bg-[#f5e9ce]/10 px-3 py-1 transition duration-300 dark:hover:border-[#e8c77e] hover:bg-text/20 text-sm text-hLight dark:text-text'
                    >
                        <span className='text-[#e8c77e]'>{Icons.phone}</span>
                        <p>+998 55 604 63 43</p>
                    </Link>
                    <LanguageButton />
                    <div onClick={() => setDrawerOpen(true)}>
                        <BurgerButton />
                    </div>

                    <Drawer
                        isOpen={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    />
                </div>
            </section>

            <div className='flex items-center justify-center gap-3 pb-1 text-base font-semibold border-b-2 border-hLight dark:border-text dark:text-[#e8c77e] text-hLight'>
                <span className='h-0.5 w-8 bg-hLight dark:bg-text' />
                <span>Khiva</span>
                <span className='h-0.5 w-8 bg-hLight dark:bg-text' />
            </div>
            <section
                className={`hidden lg:block z-50 transition-all duration-300
        ${
            scrolled
                ? "fixed top-0 left-0 w-full bg-[#f8daa2] shadow-xl dark:bg-primary"
                : "relative shadow-xl"
        }`}
            >
                <div className='mx-auto flex max-w-300 items-center justify-between px-10 py-3'>
                    {/* menuuuuuuuuuuuuuuuuuuuuuuuuuuuuu start */}
                    <div className='w-full max-w-[70%] flex items-center justify-between'>
                        <Link to='/' className='nav-link uppercase'>
                            {t("header.home")}
                        </Link>
                        <div className='relative'>
                            <button
                                className='nav-button uppercase'
                                onClick={() => {
                                    setAboutOpen(!aboutOpen);
                                    setNewsOpen(false);
                                }}
                            >
                                {t("header.about")}
                                <span
                                    className={`transition-transform duration-300 ${
                                        aboutOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    {Icons.dropdown}
                                </span>
                            </button>
                            {aboutOpen && (
                                <div className='absolute -left-5 top-10 z-50 w-42 overflow-hidden rounded-xl border border-hLight dark:border-text/70 shadow-xl bg-white dark:bg-primary'>
                                    <Link
                                        to={"/about-museum"}
                                        onClick={() => setAboutOpen(false)}
                                        className='block px-3 py-2 text-center text-sm text-hLight dark:text-text hover:bg-text/10'
                                    >
                                        {t("header.aboutMuseum")}
                                    </Link>

                                    <div className='border-t border-hLight dark:border-text/70' />

                                    <Link
                                        to=''
                                        onClick={() => setAboutOpen(false)}
                                        className='block px-3 py-2 text-center text-sm text-hLight dark:text-text hover:bg-text/10'
                                    >
                                        {t("header.employees")}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to='' className='nav-link uppercase'>
                            {t("header.collection")}
                        </Link>
                        <Link to='' className='nav-link uppercase'>
                            {t("header.gallery")}
                        </Link>
                        <div className='relative'>
                            <button
                                className='nav-button uppercase'
                                onClick={() => {
                                    setNewsOpen(!newsOpen);
                                    setAboutOpen(false);
                                }}
                            >
                                {t("header.news")}
                                <span
                                    className={`transition duration-300 ${
                                        newsOpen ? "rotate-180" : ""
                                    }`}
                                >
                                    {Icons.dropdown}
                                </span>
                            </button>
                            {newsOpen && (
                                <div className='absolute -left-5 top-10 z-50 w-40 overflow-hidden rounded-xl border border-hLight dark:border-text/70 bg-white shadow-xl dark:bg-primary'>
                                    <Link
                                        to='/news'
                                        onClick={() => setNewsOpen(false)}
                                        className='block px-3 py-2 text-center text-sm text-hLight dark:text-text hover:bg-text/10 lowercase'
                                    >
                                        {t("header.news")}
                                    </Link>
                                    <div className='border-t border-hLight dark:border-text/70' />
                                    <Link
                                        to=''
                                        onClick={() => setNewsOpen(false)}
                                        className='block px-3 py-2 text-center text-sm text-hLight dark:text-text hover:bg-text/10'
                                    >
                                        {t("header.announcements")}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link to='' className='nav-link uppercase'>
                            {t("header.contact")}
                        </Link>
                    </div>
                    {/* menuuuuuuuuuuuuuuuuuuuuuuuuuu end */}
                    <div className='flex gap-1'>
                        <TicketButton />
                        <AdminButton />
                        <DarkLigthButton />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
