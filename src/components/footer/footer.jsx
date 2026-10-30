import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Icons from "../icons/Icons";
import { OpenMap } from "../buttons/buttons";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className='bg-lightBG dark:bg-primary '>
            <div>
                <div className='mx-auto max-w-300 py-10 px-5 flex flex-wrap gap-y-5 items-start justify-between'>
                    <div>
                        <div className='w-24 h-20 bg-text rounded'>
                            <Link to='/'>
                                <img
                                    src='/header/museum-logo.png'
                                    className='h-20 w-20 object-cover mx-auto'
                                />
                            </Link>
                        </div>
                        <div>
                            <p className='font-semibold text-2xl text-text border-b-2 mt-3 w-auto'>
                                {t("footer.location")}
                            </p>
                            <div className='text-text flex items-start gap-1 mt-2 mb-5'>
                                {Icons.location}
                                <p className='font-medium text-sm text-text max-w-50'>
                                    {t("footer.locationT")}
                                </p>
                            </div>
                            <OpenMap />
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-2xl text-text border-b-2 mt-3 '>
                            {t("footer.links")}
                        </p>
                        <Link to={"/"} className='text-text font-semibold'>
                            {t("header.home")}
                        </Link>
                        <Link to={"/about"} className='text-text font-semibold'>
                            {t("header.about")}
                        </Link>
                        <Link to={"/news"} className='text-text font-semibold'>
                            {t("header.news")}
                        </Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-2xl text-text border-b-2 mt-3 '>
                            {t("footer.links")}
                        </p>
                        <Link
                            to={"/collection"}
                            className='text-text font-semibold'
                        >
                            {t("header.collection")}
                        </Link>
                        <Link
                            to={"/gallery"}
                            className='text-text font-semibold'
                        >
                            {t("header.gallery")}
                        </Link>
                        <Link
                            to={"/contact"}
                            className='text-text font-semibold'
                        >
                            {t("header.contact")}
                        </Link>
                        <Link to={"/"} className='text-text font-semibold'>
                            Khiva 360°
                        </Link>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-2xl text-text border-b-2 mt-3 '>
                            {t("footer.media")}
                        </p>
                        <Link
                            to={"/collection"}
                            className='text-text font-medium flex items-center gap-1'
                        >
                            {Icons.instagram}
                            Instagram
                        </Link>
                        <Link
                            to={"/collection"}
                            className='text-text font-medium flex items-center gap-2'
                        >
                            {Icons.facebook}
                            Facebook
                        </Link>
                        <Link
                            to={"/collection"}
                            className='text-text font-medium flex items-center gap-2'
                        >
                            {Icons.telegram}
                            Telegram
                        </Link>
                        <Link
                            to={"/collection"}
                            className='text-text font-medium flex items-center gap-1'
                        >
                            {Icons.youTube}
                            You Tube
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-b border-text'></div>
            <div className='mx-auto max-w-300 p-5 flex justify-between items-center'>
                <h2 className='text-text font-semibold text-lg'>
                    © 2025. All rights reservedDeveloped by
                    <a href='/' className='text-[#eb9b06] uppercase'>
                        Limon.uz
                    </a>
                </h2>
                <Link
                    to={""}
                    className='border border-dashed hover:border-double border-text p-1 rounded'
                >
                    {Icons.top}
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
