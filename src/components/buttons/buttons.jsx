import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Icons from "../icons/Icons";
import { Link } from "react-router-dom";
export const LanguageButton = () => {
    const [languageOpen, setLanguageOpen] = useState(false);
    const { i18n } = useTranslation();

    const languageFlags = {
        uz: <Icons.UzbekIcon />,
        ru: <Icons.RussiaIcon />,
        en: <Icons.EnglishIcon />,
    };
    const languageNames = {
        uz: "O'zbek",
        ru: "Русский",
        en: "English",
    };
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguageOpen(false);
    };

    const currentLanguage = i18n.resolvedLanguage?.split("-")[0] || "uz";

    return (
        <div className='relative'>
            <button
                onClick={() => setLanguageOpen((prev) => !prev)}
                className='flex items-center gap-1 rounded-full border border-hLight dark:border-text/70 bg-[#f5e9ce]/10 px-2 py-1 transition duration-300 text-hLight dark:text-text dark:hover:border-[#e8c77e] hover:bg-text/20 text-sm'
            >
                {languageFlags[currentLanguage] || languageFlags.uz}

                <span className='text-sm'>
                    {languageNames[currentLanguage] || languageNames.uz}
                </span>

                <span
                    className={`transition-transform duration-300 ${
                        languageOpen ? "rotate-180" : ""
                    }`}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        className='fill-hLight dark:fill-[#f5d275]'
                    >
                        <path d='M0 0h24v24H0z' fill='none' />
                        <path
                            fill='current-color'
                            fillRule='evenodd'
                            d='M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0'
                            clipRule='evenodd'
                        />
                    </svg>
                </span>
            </button>

            {languageOpen && (
                <div className='absolute z-60 top-10 left-2 '>
                    <div
                        className='flex flex-col gap-2 text-center relative w-auto rounded-xl
                        bg-white py-3 shadow-xl
                        dark:bg-[#1d5049] dark:text-white border border-hLight dark:border-text/70  hover:border-hLight/70 dark:hover:border-[#e8c77e]'
                    >
                        <button
                            onClick={() => changeLanguage("uz")}
                            className='flex items-center gap-2 text-center text-sm font-medium px-4 transition
                               hover:text-black  dark:hover:text-white text-hLight dark:text-text'
                        >
                            {languageFlags.uz} O'zbek
                        </button>
                        <span className='border-b border-hLight dark:border-text'></span>

                        <button
                            onClick={() => changeLanguage("ru")}
                            className='flex items-center gap-2 text-center text-sm font-medium px-4 transition hover:text-black  dark:hover:text-white text-hLight dark:text-text'
                        >
                            {languageFlags.ru} Русский
                        </button>
                        <span className='border-b border-hLight dark:border-text'></span>

                        <button
                            onClick={() => changeLanguage("en")}
                            className='flex items-center gap-2 text-center text-sm font-medium px-4 transition
                               hover:text-black  dark:hover:text-white text-hLight dark:text-text'
                        >
                            {languageFlags.en} English
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
///////////////////////////////////////////////////////////////////////////
export const DarkLigthButton = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem("theme") === "dark",
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark((prev) => !prev)}
            className='flex items-center gap-2 rounded-full border border-hLight dark:border-text/70 bg-[#f5e9ce]/10 px-3 py-1 transition duration-300 dark:not-last:hover:border-[#e8c77e] hover:bg-text/20'
            aria-label='Change theme'
        >
            {isDark ? Icons.light : Icons.dark}
        </button>
    );
};
// /////////////////////////////////////////////////////
export const BurgerButton = () => {
    return (
        <button className='flex flex-col gap-1.5 lg:hidden'>
            <div className='h-0.5 w-6 rounded bg-hLight dark:bg-[#d7b76d]'></div>
            <div className='h-0.5 w-6 rounded bg-hLight dark:bg-[#d7b76d]'></div>
            <div className='h-0.5 w-6 rounded bg-hLight dark:bg-[#d7b76d]'></div>
        </button>
    );
};
// //////////////////////////////////////////////////
export const TicketButton = () => {
    const { t } = useTranslation();

    return (
        <Link
            to={"/tickets"}
            className='flex items-center gap-2 rounded-full border border-hLight dark:border-text/70 bg-[#f5e9ce]/10 px-3 py-1 transition duration-300 dark:hover:border-[#e8c77e] hover:bg-text/20 text-sm font-medium text-hLight dark:text-text'
        >
            {t("buttons.tickets")}
            {Icons.tickets}
        </Link>
    );
};
// /////////////////////////////////////////////////
export const AdminButton = () => {
    return (
        <a
            href=''
            className='rounded-full border border-hLight dark:border-text/70 bg-[#f5e9ce]/10 px-3 py-1 transition duration-300 dark:hover:border-[#e8c77e] hover:bg-text/20 '
        >
            {Icons.admin}
        </a>
    );
};
// ///////////////////////////////////////////////////////
export const OpenMap = () => {
    const { t } = useTranslation();

    return (
        <Link
            to=''
            className='py-3 px-5 font-medium text-white bg-hLight dark:bg-text rounded'
        >
            {t("buttons.openMap")}
        </Link>
    );
};
