import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/icons/Icons";
import { useTranslation } from "react-i18next";

const GallerySection = () => {
    const { t } = useTranslation();

    const [gallery, setGallery] = useState([]);

    async function getGalleryData() {
        try {
            const response = await fetch("https://api.atr.uz/api/gallery");

            const data = await response.json();
            console.log("malumotlar", data);
            setGallery(data.data);
        } catch (error) {
            console.error("xato", error);
        }
    }

    useEffect(() => {
        getGalleryData();
    }, []);

    return (
        <>
            <section className='bg-lightBG dark:bg-lightGR '>
                <div className='mx-auto max-w-300 py-10 px-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold text-3xl sm:text-5xl text-hLight dark:text-text uppercase'>
                            {t("gallery.title")}
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
                    <div className='grid grid-cols-1 sm:grid-cols-4 gap-4 auto-rows-45 mt-10'>
                        {gallery?.slice(1, 8).map((galereya, index) => {
                            const gridStyles = [
                                "sm:col-span-2 sm:row-span-2",
                                "sm:col-span-2 sm:row-span-1",
                                "sm:col-span-1 sm:row-span-1",
                                "sm:col-span-1 sm:row-span-1",
                                "sm:col-span-2 sm:row-span-1",
                                "sm:col-span-2 sm:row-span-2",
                                "sm:col-span-2 sm:row-span-1",
                            ];

                            return (
                                <div
                                    key={galereya.id || index}
                                    className={`overflow-hidden rounded-xl shadow-sm ${
                                        gridStyles[index] ||
                                        "sm:col-span-1 sm:row-span-1"
                                    }`}
                                >
                                    <img
                                        src={galereya.url}
                                        className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};
export default GallerySection;
