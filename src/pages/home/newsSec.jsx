import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/icons/Icons";
import { useTranslation } from "react-i18next";

const NewsSection = () => {
    const { t, i18n } = useTranslation();

    const [news, setNews] = useState([]);

    async function getNewsData() {
        try {
            const response = await fetch("https://api.atr.uz/api/news");

            const data = await response.json();
            console.log("malumotlar", data);
            setNews(data.data);
        } catch (error) {
            console.error("xato", error);
        }
    }

    useEffect(() => {
        getNewsData();
    }, []);

    const currentLanguage = i18n.language;

    return (
        <>
            <section className='bg-lightBG dark:bg-lightGR py-10'>
                <div className='mx-auto max-w-300  px-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl sm:text-5xl text-hLight dark:text-text uppercase'>
                            {t("header.news")}
                        </h1>
                        <Link
                            to={""}
                            className='max-w-40 flex gap-1 items-center justify-center  py-1 sm:py-2 px-3 sm:px-5 border border-dashed hover:border-double border-hLight dark:border-[#d7bf93] rounded transition-all duration-300 '
                        >
                            <span className='sm:font-semibold text-sm text-hLight dark:text-[#d7bf93]'>
                                {t("buttons.details")}
                            </span>
                            {Icons.right}
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-7'>
                        {news?.map((item, i) => (
                            <Link
                                to={""}
                                key={i}
                                className='border border-text rounded-lg'
                            >
                                <div>
                                    <div className='w-full h-full'>
                                        <img
                                            src={item.images[0]?.url}
                                            className='h-60 md:h-80 w-full object-cover rounded-t-lg'
                                        />
                                    </div>
                                    <div className='relative px-3 h-40 md:h-50'>
                                        <div className='flex justify-between items-center py-2'>
                                            <div className='flex items-center gap-1'>
                                                {Icons.day}
                                                <p className='dark:text-[#d7bf93] text-[10px]  font-semibold md:text-sm text-hLight'>
                                                    {item.createdAt}
                                                </p>
                                            </div>
                                            <div className='flex items-center gap-1'>
                                                {Icons.view}
                                                <p className='dark:text-[#d7bf93] font-semibold text-[10px] md:text-sm text-hLight'>
                                                    {item.views}
                                                </p>
                                            </div>
                                        </div>
                                        <p className='font-semibold text-sm md:text-base text-hLight dark:text-text pb-4 '>
                                            {item.title[currentLanguage]}
                                        </p>

                                        <button className='absolute bottom-2 flex px-auto items-center text-center justify-center w-11 h-11 border border-lightGR hover:border-text rounded-full group'>
                                            <span className='transition-transform duration-300 group-hover:-rotate-50'>
                                                {Icons.rightN}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
export default NewsSection;
